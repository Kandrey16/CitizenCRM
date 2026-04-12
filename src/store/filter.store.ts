import { create } from 'zustand'

import { type CitizenSortValue, citizenSortValues } from '../constants/citizen/citizen.sort'
import type { EducationLevel, Gender, MilitaryStatus } from '../types/models/citizen'

interface CitizenTableStore {
  selectedSort: CitizenSortValue
  selectedGender?: Gender
  selectedBirthPlace?: string
  selectedMilitaryStatus?: MilitaryStatus
  selectedEducationLevel?: EducationLevel
  setSelectedSort: (sort: CitizenSortValue) => void
  setSelectedGender: (gender?: Gender) => void
  setSelectedBirthPlace: (birthPlace?: string) => void
  setSelectedMilitaryStatus: (status?: MilitaryStatus) => void
  setSelectedEducationLevel: (level?: EducationLevel) => void
  resetSort: () => void
  resetFilters: () => void
  resetAll: () => void
}

export const useCitizenTableStore = create<CitizenTableStore>(set => ({
  selectedSort: citizenSortValues.LAST_NAME_ASC,
  selectedGender: undefined,
  selectedBirthPlace: undefined,
  selectedMilitaryStatus: undefined,
  selectedEducationLevel: undefined,
  setSelectedSort: selectedSort => set({ selectedSort }),
  setSelectedGender: selectedGender => set({ selectedGender }),
  setSelectedBirthPlace: selectedBirthPlace => set({ selectedBirthPlace }),
  setSelectedMilitaryStatus: selectedMilitaryStatus => set({ selectedMilitaryStatus }),
  setSelectedEducationLevel: selectedEducationLevel => set({ selectedEducationLevel }),
  resetSort: () => set({ selectedSort: citizenSortValues.LAST_NAME_ASC }),
  resetFilters: () =>
    set({
      selectedGender: undefined,
      selectedBirthPlace: undefined,
      selectedMilitaryStatus: undefined,
      selectedEducationLevel: undefined,
    }),
  resetAll: () =>
    set({
      selectedSort: citizenSortValues.LAST_NAME_ASC,
      selectedGender: undefined,
      selectedBirthPlace: undefined,
      selectedMilitaryStatus: undefined,
      selectedEducationLevel: undefined,
    }),
}))
