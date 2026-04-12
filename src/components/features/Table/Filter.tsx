import { Select } from 'antd'
import { CircleX } from 'lucide-react'

import { citizenSortOptions, citizenSortValues } from '../../../constants/citizen/citizen.sort'
import { educationLevelLabel, genderLabel, militaryStatusLabel } from '../../../data/tabLabels'
import { useCitizenTableStore } from '../../../store/filter.store'
import { EducationLevel, Gender, MilitaryStatus } from '../../../types/models/citizen'

type Props = {
  birthPlaceOptions: { label: string; value: string }[]
  visibleCount: number
  totalCount: number
}

const genderOptions = Object.values(Gender).map(value => ({
  label: genderLabel[value],
  value,
}))

const militaryStatusOptions = Object.values(MilitaryStatus).map(value => ({
  label: militaryStatusLabel[value],
  value,
}))

const educationLevelOptions = Object.values(EducationLevel).map(value => ({
  label: educationLevelLabel[value],
  value,
}))

export function Filter({ birthPlaceOptions, visibleCount, totalCount }: Props) {
  const selectedSort = useCitizenTableStore(state => state.selectedSort)
  const selectedGender = useCitizenTableStore(state => state.selectedGender)
  const selectedBirthPlace = useCitizenTableStore(state => state.selectedBirthPlace)
  const selectedMilitaryStatus = useCitizenTableStore(state => state.selectedMilitaryStatus)
  const selectedEducationLevel = useCitizenTableStore(state => state.selectedEducationLevel)
  const setSelectedSort = useCitizenTableStore(state => state.setSelectedSort)
  const setSelectedGender = useCitizenTableStore(state => state.setSelectedGender)
  const setSelectedBirthPlace = useCitizenTableStore(state => state.setSelectedBirthPlace)
  const setSelectedMilitaryStatus = useCitizenTableStore(state => state.setSelectedMilitaryStatus)
  const setSelectedEducationLevel = useCitizenTableStore(state => state.setSelectedEducationLevel)
  const resetAll = useCitizenTableStore(state => state.resetAll)

  const hasActiveFilters =
    selectedSort !== citizenSortValues.LAST_NAME_ASC ||
    !!selectedGender ||
    !!selectedBirthPlace ||
    !!selectedMilitaryStatus ||
    !!selectedEducationLevel

  return (
    <div className="space-y-3">
      <div className="text-sm text-zinc-600">
        Показано строк: {visibleCount} из {totalCount}
      </div>
      <div className="flex flex-wrap items-start gap-4">
        <Select
          value={selectedSort}
          options={citizenSortOptions}
          onChange={setSelectedSort}
          className="w-full max-w-xs min-w-52"
          placeholder="Выберите сортировку"
        />
        <Select
          value={selectedGender}
          options={genderOptions}
          onChange={value => setSelectedGender(value)}
          allowClear
          className="w-full max-w-xs min-w-52"
          placeholder="Пол"
        />
        <Select
          value={selectedBirthPlace}
          options={birthPlaceOptions}
          onChange={value => setSelectedBirthPlace(value)}
          allowClear
          showSearch
          optionFilterProp="label"
          className="w-full max-w-sm min-w-52"
          placeholder="Место рождения"
        />
        <Select
          value={selectedMilitaryStatus}
          options={militaryStatusOptions}
          onChange={value => setSelectedMilitaryStatus(value)}
          allowClear
          className="w-full max-w-xs min-w-52"
          placeholder="Воинский учет"
        />
        <Select
          value={selectedEducationLevel}
          options={educationLevelOptions}
          onChange={value => setSelectedEducationLevel(value)}
          allowClear
          className="w-full max-w-xs min-w-52"
          placeholder="Образование"
        />
        {hasActiveFilters && (
          <button
            type="button"
            aria-label="Сбросить фильтры"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border text-zinc-500 shadow-sm transition-colors hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-700"
            onClick={resetAll}
          >
            <CircleX className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )
}
