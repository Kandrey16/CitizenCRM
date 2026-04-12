import type { ChartData } from 'chart.js'

import { educationLevelLabel } from '../../data/tabLabels'
import { type Citizen, EducationLevel } from '../../types/models/citizen'

export function getEducationChartData(citizens: Citizen[]): ChartData<'bar', number[], string> {
  const labels = Object.values(EducationLevel).map(value => educationLevelLabel[value])
  const values = Object.values(EducationLevel).map(
    value => citizens.filter(citizen => citizen.educationLevel === value).length,
  )

  return {
    labels,
    datasets: [
      {
        label: 'Количество граждан',
        data: values,
        backgroundColor: '#14b8a6',
      },
    ],
  }
}
