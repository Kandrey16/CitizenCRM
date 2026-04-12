import type { FieldSchema } from '../types/forms/field.schema'
import type { Education } from '../types/models/education'
import type { WorkExperience } from '../types/models/work-experience'

export const workExperienceSchema: FieldSchema<WorkExperience>[] = [
  {
    name: 'organization',
    label: 'Организация',
    type: 'input',
  },
  {
    name: 'position',
    label: 'Должность',
    type: 'input',
  },
  {
    name: 'salary',
    label: 'Оклад',
    type: 'input',
  },
  {
    name: 'startDate',
    label: 'Начало работы',
    type: 'date',
  },
  {
    name: 'endDate',
    label: 'Окончание работы',
    type: 'date',
  },
  {
    name: 'responsibilities',
    label: 'Обязанности',
    type: 'textarea',
  },
  {
    name: 'reasonForLeaving',
    label: 'Причина увольнения',
    type: 'textarea',
  },
]

export const educationSchema: FieldSchema<Education>[] = [
  {
    name: 'institutionName',
    label: 'Учебное заведение',
    type: 'input',
  },
  {
    name: 'faculty',
    label: 'Факультет',
    type: 'input',
  },
  {
    name: 'specialization',
    label: 'Специализация',
    type: 'input',
  },
  {
    name: 'degree',
    label: 'Степень / квалификация',
    type: 'input',
  },
  {
    name: 'startYear',
    label: 'Год начала',
    type: 'input',
  },
  {
    name: 'endYear',
    label: 'Год окончания',
    type: 'input',
  },
  {
    name: 'diplomNumber',
    label: 'Номер диплома',
    type: 'input',
  },
]
