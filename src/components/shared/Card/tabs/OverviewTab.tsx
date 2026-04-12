import { useQuery } from '@tanstack/react-query'

import { citizenQueries } from '../../../../constants/citizen/citizen.queries'
import { educationLevelLabel, genderLabel, militaryStatusLabel } from '../../../../data/tabLabels'
import { overviewSchema } from '../../../../schema/overview.schema'
import { formatDate } from '../../../../utils/formatDate'
import { EditButton } from '../../../ui/EditButton'
import { FieldRow } from '../../../ui/FieldRow'
import { TabSection } from '../../../ui/TabSection'
import { TabShell } from '../../../ui/TabShell'

type Props = {
  id: string
}

export function OverviewTab({ id }: Props) {
  const { data, isLoading, error } = useQuery({
    ...citizenQueries.citizen(id),
    enabled: !!id,
  })

  return (
    <TabShell
      title="Персональные данные"
      actions={<EditButton data={data} schema={overviewSchema} />}
      isLoading={isLoading}
      error={error}
      empty={!data}
      emptyHint="Не удалось загрузить карточку гражданина"
    >
      {data && (
        <div className="space-y-8">
          <TabSection title="Личные данные">
            <FieldRow label="ФИО">
              {data.lastName} {data.firstName} {data.middleName}
            </FieldRow>
            <FieldRow label="Дата рождения">{formatDate(data.birthDate)}</FieldRow>
            <FieldRow label="Пол">{genderLabel[data.gender]}</FieldRow>
            <FieldRow label="Место рождения">{data.birthPlace}</FieldRow>
            <FieldRow label="Гражданство">{data.citizenship}</FieldRow>
            <FieldRow label="Национальность">{data.nationality}</FieldRow>
            <FieldRow label="Воинский учёт">{militaryStatusLabel[data.militaryStatus]}</FieldRow>
            <FieldRow label="Уровень образования">
              {educationLevelLabel[data.educationLevel]}
            </FieldRow>
          </TabSection>

          <TabSection title="Контакты и документы">
            <FieldRow label="Телефон">{data.phone}</FieldRow>
            <FieldRow label="Email">{data.email}</FieldRow>
            <FieldRow label="СНИЛС">{data.snils}</FieldRow>
            <FieldRow label="ИНН">{data.inn}</FieldRow>
          </TabSection>

          {data.notes ? (
            <TabSection title="Примечания">
              <p className="text-sm leading-relaxed">{data.notes}</p>
            </TabSection>
          ) : null}
        </div>
      )}
    </TabShell>
  )
}
