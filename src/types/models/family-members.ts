export const FamilyRelation = {
  PARENT: 'PARENT',
  CHILD: 'CHILD',
  SPOUSE: 'SPOUSE',
  SIBLING: 'SIBLING',
  GRANDPARENT: 'GRANDPARENT',
  GRANDCHILD: 'GRANDCHILD',
  GUARDIAN: 'GUARDIAN',
  OTHER: 'OTHER',
} as const

export type FamilyRelation = (typeof FamilyRelation)[keyof typeof FamilyRelation]

export interface FamilyMember {
  ID_FamilyMembers: number
  relation: FamilyRelation
  fullName: string
  birthDate: string
  ID_Citizen: string
}
