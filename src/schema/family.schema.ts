import { familyRelationLabel } from '../data/tabLabels'
import type { FieldSchema } from '../types/forms/field.schema'
import type { FamilyMember } from '../types/models/family-members'
import { FamilyRelation } from '../types/models/family-members'

export const familyMemberSchema: FieldSchema<FamilyMember>[] = [
  {
    name: 'relation',
    label: 'Степень родства',
    type: 'select',
    options: Object.values(FamilyRelation).map(value => ({
      label: familyRelationLabel[value],
      value,
    })),
  },
  {
    name: 'fullName',
    label: 'ФИО',
    type: 'input',
  },
  {
    name: 'birthDate',
    label: 'Дата рождения',
    type: 'date',
  },
]
