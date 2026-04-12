import { type ColumnsType } from '../../components/ui/Table'
import { educationLevelLabel, genderLabel, militaryStatusLabel } from '../../data/tabLabels'
import type { Citizen } from '../../types/models/citizen'
import { formatDate } from '../../utils/formatDate'

function formatText(value?: string) {
  return value?.trim() || '—'
}

function formatCitizenDate(
  value: Citizen['birthDate'] | Citizen['createdAt'] | Citizen['updatedAt'],
) {
  return formatText(value) === '—' ? '—' : formatDate(value)
}

export function getCitizenColumns(): ColumnsType<Citizen> {
  return [
    {
      title: 'Фамилия',
      dataIndex: 'lastName',
      key: 'lastName',
      render: value => formatText(value),
    },
    {
      title: 'Имя',
      dataIndex: 'firstName',
      key: 'firstName',
      render: value => formatText(value),
    },
    {
      title: 'Отчество',
      dataIndex: 'middleName',
      key: 'middleName',
      render: value => formatText(value),
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
      render: value => formatText(value),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: value => formatText(value),
    },
    {
      title: 'Место рождения',
      dataIndex: 'birthPlace',
      key: 'birthPlace',
      render: value => formatText(value),
    },
    {
      title: 'Дата рождения',
      dataIndex: 'birthDate',
      key: 'birthDate',
      render: value => formatCitizenDate(value),
    },
    {
      title: 'Пол',
      dataIndex: 'gender',
      key: 'gender',
      render: value => genderLabel[value] ?? '—',
    },
    {
      title: 'Воинский учет',
      dataIndex: 'militaryStatus',
      key: 'militaryStatus',
      render: value => militaryStatusLabel[value] ?? '—',
    },
    {
      title: 'Образование',
      dataIndex: 'educationLevel',
      key: 'educationLevel',
      render: value => educationLevelLabel[value] ?? '—',
    },
    {
      title: 'Гражданство',
      dataIndex: 'citizenship',
      key: 'citizenship',
      render: value => formatText(value),
    },
    {
      title: 'Национальность',
      dataIndex: 'nationality',
      key: 'nationality',
      render: value => formatText(value),
    },
    {
      title: 'Дата создания',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: value => formatCitizenDate(value),
    },
    {
      title: 'Дата обновления',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: value => formatCitizenDate(value),
    },
  ]
}
