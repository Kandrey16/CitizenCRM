import { useQuery } from '@tanstack/react-query'

import { citizenQueries } from '../../../../constants/citizen/citizen.queries'
import { medicalInfoSchema } from '../../../../schema/medicine.schema'
import { formatDate } from '../../../../utils/formatDate'
import { EditButton } from '../../../ui/EditButton'
import { FieldRow } from '../../../ui/FieldRow'
import { TabSection } from '../../../ui/TabSection'
import { TabShell } from '../../../ui/TabShell'

type Props = {
  id: string
}

export function MedicineTab({ id }: Props) {
  const { data, isLoading, error } = useQuery({
    ...citizenQueries.medicine(id),
    enabled: !!id,
  })
  const hasRecords = data && data.medicalInfo.length > 0

  return (
    <TabShell
      title=""
      isLoading={isLoading}
      error={error}
      empty={!data || !hasRecords}
      emptyHint="Нет медицинских данных"
    >
      {data && hasRecords && (
        <div className="space-y-8">
          {data.medicalInfo.map((m, i) => (
            <TabSection
              key={m.ID_MedicalInfo}
              title={`Запись ${i + 1}`}
              actions={<EditButton data={m} schema={medicalInfoSchema} />}
            >
              <FieldRow label="Рост, см">{m.height}</FieldRow>
              <FieldRow label="Вес, кг">{m.weight}</FieldRow>
              <FieldRow label="Группа крови">{m.bloodGroup}</FieldRow>
              <FieldRow label="Аллергии">{m.allergies || '—'}</FieldRow>
              <FieldRow label="Диагнозы">{m.diagnes || '—'}</FieldRow>
              <FieldRow label="Дата последнего осмотра">
                {m.lastCheckUpDate ? formatDate(m.lastCheckUpDate) : '—'}
              </FieldRow>
            </TabSection>
          ))}
        </div>
      )}
    </TabShell>
  )
}
