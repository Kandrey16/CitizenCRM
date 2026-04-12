export const Gender = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
} as const

export type Gender = (typeof Gender)[keyof typeof Gender]

export const MilitaryStatus = {
  SERVED: 'SERVED',
  EXEMPT: 'EXEMPT',
  NOT_SERVED: 'NOT_SERVED',
} as const

export type MilitaryStatus = (typeof MilitaryStatus)[keyof typeof MilitaryStatus]

export const EducationLevel = {
  SECONDARY: 'SECONDARY',
  BACHELOR: 'BACHELOR',
  MASTER: 'MASTER',
  PHD: 'PHD',
} as const

export type EducationLevel = (typeof EducationLevel)[keyof typeof EducationLevel]

export interface Citizen {
  ID_Citizen: string
  firstName: string
  lastName: string
  middleName: string
  birthDate: string
  gender: Gender
  birthPlace: string
  citizenship: string
  nationality: string
  snils: string
  inn: string
  email: string
  phone: string
  photoUrl: string
  militaryStatus: MilitaryStatus
  educationLevel: EducationLevel
  createdAt: string
  updatedAt: string
  notes: string
}
