import type { ChartData } from 'chart.js'

import { militaryStatusLabel } from '../../data/tabLabels'
import { type Citizen, MilitaryStatus } from '../../types/models/citizen'

export function getMilitaryChartData(citizens: Citizen[]): ChartData<'bar', number[], string> {
  const labels = Object.values(MilitaryStatus).map(value => militaryStatusLabel[value])
  const values = Object.values(MilitaryStatus).map(
    value => citizens.filter(citizen => citizen.militaryStatus === value).length,
  )

  return {
    labels,
    datasets: [
      {
        label: 'Количество граждан',
        data: values,
        backgroundColor: ['#22c55e', '#f59e0b', '#ef4444'],
      },
    ],
  }
}
