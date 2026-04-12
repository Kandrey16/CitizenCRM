import type { DashboardMetrics } from '../../types/dashboard/dashboard.type'
import type { Citizen } from '../../types/models/citizen'
import { getAge } from './getAge'

export function getDashboardMetrics(citizens: Citizen[]): DashboardMetrics {
  const total = citizens.length
  const averageAge =
    total > 0
      ? Math.round(citizens.reduce((sum, citizen) => sum + getAge(citizen.birthDate), 0) / total)
      : 0
  const contactsFilled = citizens.filter(citizen => citizen.phone && citizen.email).length
  const updatedLast30Days = citizens.filter(citizen => {
    const diffMs = Date.now() - new Date(citizen.updatedAt).getTime()
    return diffMs <= 30 * 24 * 60 * 60 * 1000
  }).length

  return {
    total,
    averageAge,
    contactsFilled,
    updatedLast30Days,
  }
}
