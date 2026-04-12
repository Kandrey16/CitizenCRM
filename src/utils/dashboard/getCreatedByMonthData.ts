import type { ChartData } from 'chart.js'

import type { Citizen } from '../../types/models/citizen'
import { buildCountMap } from './buildCountMap'
import { formatMonthKey } from './formatMonthKey'

export function getCreatedByMonthChartData(
  citizens: Citizen[],
): ChartData<'line', number[], string> {
  const monthMap = buildCountMap(citizens.map(citizen => citizen.createdAt.slice(0, 7)))
  const sortedEntries = [...monthMap.entries()].sort(([left], [right]) => left.localeCompare(right))

  return {
    labels: sortedEntries.map(([month]) => formatMonthKey(`${month}-01`)),
    datasets: [
      {
        label: 'Создано карточек',
        data: sortedEntries.map(([, count]) => count),
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  }
}
