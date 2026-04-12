import type { ChartData } from 'chart.js'

import { genderLabel } from '../../data/tabLabels'
import { type Citizen, Gender } from '../../types/models/citizen'

export function getGenderChartData(citizens: Citizen[]): ChartData<'doughnut', number[], string> {
  const labels = Object.values(Gender).map(value => genderLabel[value])
  const values = Object.values(Gender).map(
    value => citizens.filter(citizen => citizen.gender === value).length,
  )

  return {
    labels,
    datasets: [
      {
        label: 'Граждане',
        data: values,
        backgroundColor: ['#3b82f6', '#ec4899'],
        borderWidth: 1,
      },
    ],
  }
}
