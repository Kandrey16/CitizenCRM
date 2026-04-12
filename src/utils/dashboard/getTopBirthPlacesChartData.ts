import type { ChartData } from 'chart.js'

import type { Citizen } from '../../types/models/citizen'
import { buildCountMap } from './buildCountMap'

export function getTopBirthPlacesChartData(
  citizens: Citizen[],
): ChartData<'bar', number[], string> {
  const placeMap = buildCountMap(citizens.map(citizen => citizen.birthPlace))
  const topPlaces = [...placeMap.entries()].sort(([, left], [, right]) => right - left).slice(0, 5)

  return {
    labels: topPlaces.map(([place]) => place),
    datasets: [
      {
        label: 'Количество граждан',
        data: topPlaces.map(([, count]) => count),
        backgroundColor: '#8b5cf6',
      },
    ],
  }
}
