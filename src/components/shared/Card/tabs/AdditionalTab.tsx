import { useQuery } from '@tanstack/react-query'

import { citizenQueries } from '../../../../constants/citizen/citizen.queries'
import {
  languageGradeLabel,
  socialNetworkLabel,
  spokenLanguageLabel,
} from '../../../../data/tabLabels'
import {
  hobbySchema,
  languageSchema,
  socialProfileSchema,
} from '../../../../schema/additional.schema'
import { EditButton } from '../../../ui/EditButton'
import { FieldRow } from '../../../ui/FieldRow'
import { TabSection } from '../../../ui/TabSection'
import { TabShell } from '../../../ui/TabShell'

type Props = {
  id: string
}

export function AdditionalTab({ id }: Props) {
  const { data, isLoading, error } = useQuery({
    ...citizenQueries.additional(id),
    enabled: !!id,
  })

  const hasContent =
    data && (data.hobbies.length > 0 || data.languages.length > 0 || data.socialProfiles.length > 0)

  return (
    <TabShell
      title=""
      isLoading={isLoading}
      error={error}
      empty={!data || !hasContent}
      emptyHint="Нет дополнительной информации"
    >
      {data && hasContent && (
        <div className="space-y-8">
          {data.hobbies.map((h, i) => (
            <TabSection
              key={h.ID_Hobby}
              title={`Хобби ${i + 1}`}
              actions={<EditButton data={h} schema={hobbySchema} />}
            >
              <FieldRow label="Название">{h.name}</FieldRow>
              {h.description ? <FieldRow label="Описание">{h.description}</FieldRow> : null}
            </TabSection>
          ))}

          {data.languages.map((lang, i) => (
            <TabSection
              key={lang.ID_Languages}
              title={`Язык ${i + 1}`}
              actions={<EditButton data={lang} schema={languageSchema} />}
            >
              <FieldRow label="Язык">{spokenLanguageLabel[lang.language]}</FieldRow>
              <FieldRow label="Уровень">{languageGradeLabel[lang.grade]}</FieldRow>
            </TabSection>
          ))}

          {data.socialProfiles.map((s, i) => (
            <TabSection
              key={s.ID_SocialProfile}
              title={`Профиль ${i + 1}`}
              actions={<EditButton data={s} schema={socialProfileSchema} />}
            >
              <FieldRow label="Сеть">{socialNetworkLabel[s.network]}</FieldRow>
              <FieldRow label="Имя пользователя">{s.userName}</FieldRow>
              <FieldRow label="Ссылка">
                {s.profile_url ? (
                  <a
                    href={s.profile_url}
                    className="text-blue-700 underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {s.profile_url}
                  </a>
                ) : (
                  '—'
                )}
              </FieldRow>
            </TabSection>
          ))}
        </div>
      )}
    </TabShell>
  )
}
