export const SpokenLanguage = {
  RUSSIAN: 'RUSSIAN',
  ENGLISH: 'ENGLISH',
  GERMAN: 'GERMAN',
  FRENCH: 'FRENCH',
  SPANISH: 'SPANISH',
  CHINESE: 'CHINESE',
  OTHER: 'OTHER',
} as const

export type SpokenLanguage = (typeof SpokenLanguage)[keyof typeof SpokenLanguage]

export const LanguageGrade = {
  A1: 'A1',
  A2: 'A2',
  B1: 'B1',
  B2: 'B2',
  C1: 'C1',
  C2: 'C2',
  NATIVE: 'NATIVE',
} as const

export type LanguageGrade = (typeof LanguageGrade)[keyof typeof LanguageGrade]

export interface Language {
  ID_Languages: string
  language: SpokenLanguage
  grade: LanguageGrade
  ID_Citizen: string
}
