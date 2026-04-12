import { useMemo } from 'react'

import { type CitizenSortValue, citizenSortValues } from '../constants/citizen/citizen.sort'
import type { Citizen } from '../types/models/citizen'

type CitizenFilters = {
  selectedGender?: Citizen['gender']
  selectedBirthPlace?: string
  selectedMilitaryStatus?: Citizen['militaryStatus']
  selectedEducationLevel?: Citizen['educationLevel']
}

const collator = new Intl.Collator('ru', {
  sensitivity: 'base',
})

function compareDates(left: string, right: string) {
  return new Date(left).getTime() - new Date(right).getTime()
}

export function useSelect(
  citizens: Citizen[] | undefined,
  selectedSort: CitizenSortValue,
  filters: CitizenFilters,
) {
  return useMemo(() => {
    const items = [...(citizens ?? [])].filter(citizen => {
      if (filters.selectedGender && citizen.gender !== filters.selectedGender) {
        return false
      }

      if (filters.selectedBirthPlace && citizen.birthPlace !== filters.selectedBirthPlace) {
        return false
      }

      if (
        filters.selectedMilitaryStatus &&
        citizen.militaryStatus !== filters.selectedMilitaryStatus
      ) {
        return false
      }

      if (
        filters.selectedEducationLevel &&
        citizen.educationLevel !== filters.selectedEducationLevel
      ) {
        return false
      }

      return true
    })

    switch (selectedSort) {
      case citizenSortValues.LAST_NAME_DESC:
        return items.sort((a, b) => collator.compare(b.lastName, a.lastName))
      case citizenSortValues.CREATED_AT_ASC:
        return items.sort((a, b) => compareDates(a.createdAt, b.createdAt))
      case citizenSortValues.CREATED_AT_DESC:
        return items.sort((a, b) => compareDates(b.createdAt, a.createdAt))
      case citizenSortValues.UPDATED_AT_ASC:
        return items.sort((a, b) => compareDates(a.updatedAt, b.updatedAt))
      case citizenSortValues.UPDATED_AT_DESC:
        return items.sort((a, b) => compareDates(b.updatedAt, a.updatedAt))
      case citizenSortValues.LAST_NAME_ASC:
      default:
        return items.sort((a, b) => collator.compare(a.lastName, b.lastName))
    }
  }, [citizens, filters, selectedSort])
}
