import { languageGradeLabel, socialNetworkLabel, spokenLanguageLabel } from '../data/tabLabels'
import type { FieldSchema } from '../types/forms/field.schema'
import type { Hobby } from '../types/models/hobby'
import type { Language } from '../types/models/languages'
import { LanguageGrade, SpokenLanguage } from '../types/models/languages'
import type { SocialProfile } from '../types/models/social-profile'
import { SocialNetwork } from '../types/models/social-profile'

export const hobbySchema: FieldSchema<Hobby>[] = [
  {
    name: 'name',
    label: 'Название',
    type: 'input',
  },
  {
    name: 'description',
    label: 'Описание',
    type: 'textarea',
  },
]

export const languageSchema: FieldSchema<Language>[] = [
  {
    name: 'language',
    label: 'Язык',
    type: 'select',
    options: Object.values(SpokenLanguage).map(value => ({
      label: spokenLanguageLabel[value],
      value,
    })),
  },
  {
    name: 'grade',
    label: 'Уровень',
    type: 'select',
    options: Object.values(LanguageGrade).map(value => ({
      label: languageGradeLabel[value],
      value,
    })),
  },
]

export const socialProfileSchema: FieldSchema<SocialProfile>[] = [
  {
    name: 'network',
    label: 'Сеть',
    type: 'select',
    options: Object.values(SocialNetwork).map(value => ({
      label: socialNetworkLabel[value],
      value,
    })),
  },
  {
    name: 'userName',
    label: 'Имя пользователя',
    type: 'input',
  },
  {
    name: 'profile_url',
    label: 'Ссылка',
    type: 'input',
  },
]
