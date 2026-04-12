import type { EducationLevel, Gender, MilitaryStatus } from '../types/models/citizen'
import type { FamilyRelation } from '../types/models/family-members'
import type { LanguageGrade, SpokenLanguage } from '../types/models/languages'
import type { PropertyType } from '../types/models/property'
import type { SocialNetwork } from '../types/models/social-profile'
import type { VehicleType } from '../types/models/vehicle'

export const genderLabel: Record<Gender, string> = {
  MALE: 'Мужской',
  FEMALE: 'Женский',
}

export const familyRelationLabel: Record<FamilyRelation, string> = {
  PARENT: 'Родитель',
  CHILD: 'Ребёнок',
  SPOUSE: 'Супруг(а)',
  SIBLING: 'Брат / сестра',
  GRANDPARENT: 'Дед / бабушка',
  GRANDCHILD: 'Внук / внучка',
  GUARDIAN: 'Опекун',
  OTHER: 'Иное',
}

export const vehicleTypeLabel: Record<VehicleType, string> = {
  CAR: 'Легковой',
  MOTORCYCLE: 'Мотоцикл',
  TRUCK: 'Грузовой',
  BUS: 'Автобус',
  TRAILER: 'Прицеп',
  OTHER: 'Иное',
}

export const propertyTypeLabel: Record<PropertyType, string> = {
  APARTMENT: 'Квартира',
  HOUSE: 'Дом',
  LAND: 'Земельный участок',
  GARAGE: 'Гараж',
  DACHA: 'Дача',
  COMMERCIAL: 'Коммерческая',
  PARKING: 'Парковка',
  OTHER: 'Иное',
}

export const socialNetworkLabel: Record<SocialNetwork, string> = {
  VK: 'ВКонтакте',
  TELEGRAM: 'Telegram',
  OK: 'Одноклассники',
  WHATSAPP: 'WhatsApp',
  FACEBOOK: 'Facebook',
  INSTAGRAM: 'Instagram',
  LINKEDIN: 'LinkedIn',
  TWITTER: 'Twitter',
  OTHER: 'Другое',
}

export const spokenLanguageLabel: Record<SpokenLanguage, string> = {
  RUSSIAN: 'Русский',
  ENGLISH: 'Английский',
  GERMAN: 'Немецкий',
  FRENCH: 'Французский',
  SPANISH: 'Испанский',
  CHINESE: 'Китайский',
  OTHER: 'Другой',
}

export const languageGradeLabel: Record<LanguageGrade, string> = {
  A1: 'A1',
  A2: 'A2',
  B1: 'B1',
  B2: 'B2',
  C1: 'C1',
  C2: 'C2',
  NATIVE: 'Родной',
}

export const militaryStatusLabel: Record<MilitaryStatus, string> = {
  SERVED: 'Служил',
  EXEMPT: 'Не подлежит / освобождён',
  NOT_SERVED: 'Не служил',
}

export const educationLevelLabel: Record<EducationLevel, string> = {
  SECONDARY: 'Среднее',
  BACHELOR: 'Бакалавр',
  MASTER: 'Магистр',
  PHD: 'Кандидат / доктор наук',
}
