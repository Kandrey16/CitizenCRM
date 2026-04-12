export const citizenSortValues = {
  LAST_NAME_ASC: 'lastNameAsc',
  LAST_NAME_DESC: 'lastNameDesc',
  CREATED_AT_ASC: 'createdAtAsc',
  CREATED_AT_DESC: 'createdAtDesc',
  UPDATED_AT_ASC: 'updatedAtAsc',
  UPDATED_AT_DESC: 'updatedAtDesc',
} as const

export type CitizenSortValue = (typeof citizenSortValues)[keyof typeof citizenSortValues]

export const citizenSortOptions = [
  { value: citizenSortValues.LAST_NAME_ASC, label: 'Фамилия: А-Я' },
  { value: citizenSortValues.LAST_NAME_DESC, label: 'Фамилия: Я-А' },
  { value: citizenSortValues.CREATED_AT_ASC, label: 'Дата создания: сначала старые' },
  { value: citizenSortValues.CREATED_AT_DESC, label: 'Дата создания: сначала новые' },
  { value: citizenSortValues.UPDATED_AT_ASC, label: 'Дата обновления: сначала старые' },
  { value: citizenSortValues.UPDATED_AT_DESC, label: 'Дата обновления: сначала новые' },
]
