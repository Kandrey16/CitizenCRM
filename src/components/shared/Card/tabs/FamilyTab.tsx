import { useQuery } from '@tanstack/react-query'

import { citizenQueries } from '../../../../constants/citizen/citizen.queries'
import { familyRelationLabel } from '../../../../data/tabLabels'
import { familyMemberSchema } from '../../../../schema/family.schema'
import { formatDate } from '../../../../utils/formatDate'
import { EditButton } from '../../../ui/EditButton'
import { FieldRow } from '../../../ui/FieldRow'
import { TabSection } from '../../../ui/TabSection'
import { TabShell } from '../../../ui/TabShell'

type Props = {
  id: string
}

export function FamilyTab({ id }: Props) {
  const { data, isLoading, error } = useQuery({
    ...citizenQueries.family(id),
    enabled: !!id,
  })
  const hasMembers = data && data.familyMembers.length > 0

  return (
    <TabShell
      title=""
      isLoading={isLoading}
      error={error}
      empty={!data || !hasMembers}
      emptyHint="Нет данных о семье"
    >
      {data && hasMembers && (
        <div className="space-y-8">
          {data.familyMembers.map((m, i) => (
            <TabSection
              key={m.ID_FamilyMembers}
              title={`Родственник ${i + 1}`}
              actions={<EditButton data={m} schema={familyMemberSchema} />}
            >
              <FieldRow label="Степень родства">{familyRelationLabel[m.relation]}</FieldRow>
              <FieldRow label="ФИО">{m.fullName}</FieldRow>
              <FieldRow label="Дата рождения">{formatDate(m.birthDate)}</FieldRow>
            </TabSection>
          ))}
        </div>
      )}
    </TabShell>
  )
}
