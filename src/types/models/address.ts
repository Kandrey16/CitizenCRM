export const AddressType = {
  REGISTRATION: 'REGISTRATION',
  RESIDENTIAL: 'RESIDENTIAL',
  ACTUAL: 'ACTUAL',
  POSTAL: 'POSTAL',
  TEMPORARY: 'TEMPORARY',
} as const

export type AddressType = (typeof AddressType)[keyof typeof AddressType]

export interface Address {
  ID_Address: number
  type: AddressType
  country: string
  region: string
  city: string
  street: string
  house: string
  building: string
  apartment: string
  postalCode: string
  ID_Citizen: string
}
