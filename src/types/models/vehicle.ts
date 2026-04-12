export const VehicleType = {
  CAR: 'CAR',
  MOTORCYCLE: 'MOTORCYCLE',
  TRUCK: 'TRUCK',
  BUS: 'BUS',
  TRAILER: 'TRAILER',
  OTHER: 'OTHER',
} as const

export type VehicleType = (typeof VehicleType)[keyof typeof VehicleType]

export interface Vehicle {
  ID_Vehicle: number
  type: VehicleType
  brand: string
  model: string
  year: string | number
  number: string
  ID_Citizen: string
}
