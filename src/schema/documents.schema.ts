import type { FieldSchema } from '../types/forms/field.schema'
import type { DriverLicense } from '../types/models/driver-license'
import type { Passport } from '../types/models/passport'

export const passportSchema: FieldSchema<Passport>[] = [
  {
    name: 'series',
    label: 'Серия',
    type: 'input',
  },
  {
    name: 'number',
    label: 'Номер',
    type: 'input',
  },
  {
    name: 'issuedBy',
    label: 'Кем выдан',
    type: 'input',
  },
  {
    name: 'issueDate',
    label: 'Дата выдачи',
    type: 'date',
  },
  {
    name: 'code',
    label: 'Код подразделения',
    type: 'input',
  },
]

export const driverLicenseSchema: FieldSchema<DriverLicense>[] = [
  {
    name: 'number',
    label: 'Номер',
    type: 'input',
  },
  {
    name: 'type',
    label: 'Категория',
    type: 'input',
  },
]
