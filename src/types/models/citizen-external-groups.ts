import type { Address } from './address'
import type { DriverLicense } from './driver-license'
import type { Education } from './education'
import type { FamilyMember } from './family-members'
import type { Hobby } from './hobby'
import type { Language } from './languages'
import type { MedicalInfo } from './medical-info'
import type { Passport } from './passport'
import type { Property } from './property'
import type { SocialProfile } from './social-profile'
import type { Vehicle } from './vehicle'
import type { WorkExperience } from './work-experience'

export interface CitizenGroupPayload {
  addresses: Address[]
}

export interface DocumentsGroupPayload {
  passports: Passport[]
  driverLicenses: DriverLicense[]
}

export interface CareerGroupPayload {
  workExperience: WorkExperience[]
  education: Education[]
}

export interface FamilyGroupPayload {
  familyMembers: FamilyMember[]
}

export interface AssetsGroupPayload {
  vehicles: Vehicle[]
  properties: Property[]
}

export interface MedicineGroupPayload {
  medicalInfo: MedicalInfo[]
}

export interface AdditionalGroupPayload {
  socialProfiles: SocialProfile[]
  hobbies: Hobby[]
  languages: Language[]
}
