import { propertyTypeLabel, vehicleTypeLabel } from '../data/tabLabels'
import type { FieldSchema } from '../types/forms/field.schema'
import type { Property } from '../types/models/property'
import { PropertyType } from '../types/models/property'
import type { Vehicle } from '../types/models/vehicle'
import { VehicleType } from '../types/models/vehicle'

export const propertySchema: FieldSchema<Property>[] = [
  {
    name: 'type',
    label: 'Тип',
    type: 'select',
    options: Object.values(PropertyType).map(value => ({
      label: propertyTypeLabel[value],
      value,
    })),
  },
  {
    name: 'address',
    label: 'Адрес',
    type: 'input',
  },
  {
    name: 'area',
    label: 'Площадь (описание)',
    type: 'input',
  },
  {
    name: 'square',
    label: 'Площадь, м²',
    type: 'input',
  },
]

export const vehicleSchema: FieldSchema<Vehicle>[] = [
  {
    name: 'type',
    label: 'Тип',
    type: 'select',
    options: Object.values(VehicleType).map(value => ({
      label: vehicleTypeLabel[value],
      value,
    })),
  },
  {
    name: 'brand',
    label: 'Марка',
    type: 'input',
  },
  {
    name: 'model',
    label: 'Модель',
    type: 'input',
  },
  {
    name: 'year',
    label: 'Год выпуска',
    type: 'input',
  },
  {
    name: 'number',
    label: 'Госномер',
    type: 'input',
  },
]
