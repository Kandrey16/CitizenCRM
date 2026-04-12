import { educationLevelLabel, genderLabel, militaryStatusLabel } from '../data/tabLabels'
import type { FieldSchema } from '../types/forms/field.schema'
import type { Citizen } from '../types/models/citizen'
import { EducationLevel, Gender, MilitaryStatus } from '../types/models/citizen'

export const overviewSchema: FieldSchema<Citizen>[] = [
  {
    name: 'firstName',
    label: 'Имя',
    type: 'input',
    placeholder: 'Введите имя',
  },
  {
    name: 'lastName',
    label: 'Фамилия',
    type: 'input',
  },
  {
    name: 'middleName',
    label: 'Отчество',
    type: 'input',
  },
  {
    name: 'birthDate',
    label: 'Дата рождения',
    type: 'date',
  },
  {
    name: 'gender',
    label: 'Пол',
    type: 'select',
    options: Object.values(Gender).map(value => ({
      label: genderLabel[value],
      value,
    })),
  },
  {
    name: 'birthPlace',
    label: 'Место рождения',
    type: 'input',
  },
  {
    name: 'citizenship',
    label: 'Гражданство',
    type: 'input',
  },
  {
    name: 'nationality',
    label: 'Национальность',
    type: 'input',
  },
  {
    name: 'militaryStatus',
    label: 'Воинский учет',
    type: 'select',
    options: Object.values(MilitaryStatus).map(value => ({
      label: militaryStatusLabel[value],
      value,
    })),
  },
  {
    name: 'educationLevel',
    label: 'Уровень образования',
    type: 'select',
    options: Object.values(EducationLevel).map(value => ({
      label: educationLevelLabel[value],
      value,
    })),
  },
  {
    name: 'phone',
    label: 'Телефон',
    type: 'input',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'input',
  },
  {
    name: 'snils',
    label: 'СНИЛС',
    type: 'input',
  },
  {
    name: 'inn',
    label: 'ИНН',
    type: 'input',
  },
  {
    name: 'notes',
    label: 'Примечания',
    type: 'textarea',
  },
]
