import { useQuery } from '@tanstack/react-query'

import { citizenQueries } from '../../../../constants/citizen/citizen.queries'
import { driverLicenseSchema, passportSchema } from '../../../../schema/documents.schema'
import { formatDate } from '../../../../utils/formatDate'
import { EditButton } from '../../../ui/EditButton'
import { FieldRow } from '../../../ui/FieldRow'
import { TabSection } from '../../../ui/TabSection'
import { TabShell } from '../../../ui/TabShell'

type Props = {
  id: string
}

export function DocumentTab({ id }: Props) {
  const { data, isLoading, error } = useQuery({
    ...citizenQueries.documents(id),
    enabled: !!id,
  })
  const hasDocs = data && (data.passports.length > 0 || data.driverLicenses.length > 0)

  return (
    <TabShell
      title="Документы"
      isLoading={isLoading}
      error={error}
      empty={!data || !hasDocs}
      emptyHint="Нет данных о документах"
    >
      {data && hasDocs && (
        <div className="space-y-8">
          {data.passports.map((p, i) => (
            <TabSection
              key={p.ID_Passport}
              title={`Паспорт ${i + 1}`}
              actions={<EditButton data={p} schema={passportSchema} />}
            >
              <FieldRow label="Серия и номер">
                {p.series} {p.number}
              </FieldRow>
              <FieldRow label="Кем выдан">{p.issuedBy}</FieldRow>
              <FieldRow label="Дата выдачи">{formatDate(p.issueDate)}</FieldRow>
              <FieldRow label="Код подразделения">{p.code}</FieldRow>
            </TabSection>
          ))}

          {data.driverLicenses.map((d, i) => (
            <TabSection
              key={d.ID_Driver_License}
              title={`Водительское удостоверение ${i + 1}`}
              actions={<EditButton data={d} schema={driverLicenseSchema} />}
            >
              <FieldRow label="Номер">{d.number}</FieldRow>
              <FieldRow label="Категория">{d.type}</FieldRow>
            </TabSection>
          ))}
        </div>
      )}
    </TabShell>
  )
}
