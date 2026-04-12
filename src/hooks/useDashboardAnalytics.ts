import { useMemo } from 'react'

import type { Citizen } from '../types/models/citizen'
import { getCreatedByMonthChartData } from '../utils/dashboard/getCreatedByMonthData'
import { getDashboardMetrics } from '../utils/dashboard/getDashboardMetrics'
import { getEducationChartData } from '../utils/dashboard/getEducationChartData'
import { getGenderChartData } from '../utils/dashboard/getGenderChartData'
import { getMilitaryChartData } from '../utils/dashboard/getMilitaryChartData'
import { getTopBirthPlacesChartData } from '../utils/dashboard/getTopBirthPlacesChartData'

export function useDashboardAnalytics(citizens: Citizen[] | undefined) {
  const items = citizens ?? []

  return useMemo(
    () => ({
      metrics: getDashboardMetrics(items),
      genderChartData: getGenderChartData(items),
      educationChartData: getEducationChartData(items),
      militaryChartData: getMilitaryChartData(items),
      createdByMonthChartData: getCreatedByMonthChartData(items),
      topBirthPlacesChartData: getTopBirthPlacesChartData(items),
    }),
    [items],
  )
}
