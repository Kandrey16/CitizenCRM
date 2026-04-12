import type { FieldSchema } from '../types/forms/field.schema'
import type { MedicalInfo } from '../types/models/medical-info'

export const medicalInfoSchema: FieldSchema<MedicalInfo>[] = [
  {
    name: 'height',
    label: 'Рост, см',
    type: 'input',
  },
  {
    name: 'weight',
    label: 'Вес, кг',
    type: 'input',
  },
  {
    name: 'bloodGroup',
    label: 'Группа крови',
    type: 'input',
  },
  {
    name: 'allergies',
    label: 'Аллергии',
    type: 'textarea',
  },
  {
    name: 'diagnes',
    label: 'Диагнозы',
    type: 'textarea',
  },
  {
    name: 'lastCheckUpDate',
    label: 'Дата последнего осмотра',
    type: 'date',
  },
]
