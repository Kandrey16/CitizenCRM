import { useQuery } from '@tanstack/react-query'

import { citizenQueries } from '../../../../constants/citizen/citizen.queries'
import { educationSchema, workExperienceSchema } from '../../../../schema/career.schema'
import { formatDate } from '../../../../utils/formatDate'
import { EditButton } from '../../../ui/EditButton'
import { FieldRow } from '../../../ui/FieldRow'
import { TabSection } from '../../../ui/TabSection'
import { TabShell } from '../../../ui/TabShell'

type Props = {
  id: string
}

export function CareerTab({ id }: Props) {
  const { data, isLoading, error } = useQuery({
    ...citizenQueries.career(id),
    enabled: !!id,
  })
  const hasContent = data && (data.workExperience.length > 0 || data.education.length > 0)

  return (
    <TabShell
      title=""
      isLoading={isLoading}
      error={error}
      empty={!data || !hasContent}
      emptyHint="Нет данных о карьере и образовании"
    >
      {data && hasContent && (
        <div className="space-y-8">
          {data.workExperience.map((w, i) => (
            <TabSection
              key={w.ID_Work_Experience}
              title={`Место работы ${i + 1}`}
              actions={<EditButton data={w} schema={workExperienceSchema} />}
            >
              <FieldRow label="Организация">{w.organization}</FieldRow>
              <FieldRow label="Должность">{w.position}</FieldRow>
              <FieldRow label="Оклад">{w.salary.toLocaleString('ru-RU')} ₽</FieldRow>
              <FieldRow label="Начало работы">{formatDate(w.startDate)}</FieldRow>
              <FieldRow label="Окончание">
                {w.endDate ? formatDate(w.endDate) : 'По настоящее время'}
              </FieldRow>
              <FieldRow label="Обязанности">{w.responsibilities}</FieldRow>
              {w.reasonForLeaving ? (
                <FieldRow label="Причина увольнения">{w.reasonForLeaving}</FieldRow>
              ) : null}
            </TabSection>
          ))}

          {data.education.map((e, i) => (
            <TabSection
              key={e.ID_Education}
              title={`Образование ${i + 1}`}
              actions={<EditButton data={e} schema={educationSchema} />}
            >
              <FieldRow label="Учебное заведение">{e.institutionName}</FieldRow>
              <FieldRow label="Факультет">{e.faculty}</FieldRow>
              <FieldRow label="Специализация">{e.specialization}</FieldRow>
              <FieldRow label="Степень / квалификация">{e.degree}</FieldRow>
              <FieldRow label="Годы обучения">
                {e.startYear} — {e.endYear}
              </FieldRow>
              <FieldRow label="Номер диплома">{e.diplomNumber}</FieldRow>
            </TabSection>
          ))}
        </div>
      )}
    </TabShell>
  )
}
