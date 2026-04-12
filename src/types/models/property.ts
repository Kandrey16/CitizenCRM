export const PropertyType = {
  APARTMENT: 'APARTMENT',
  HOUSE: 'HOUSE',
  LAND: 'LAND',
  GARAGE: 'GARAGE',
  DACHA: 'DACHA',
  COMMERCIAL: 'COMMERCIAL',
  PARKING: 'PARKING',
  OTHER: 'OTHER',
} as const

export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType]

export interface Property {
  ID_Propertie: number
  type: PropertyType
  address: string
  area: string
  square: number
  ID_Citizen: string
}
