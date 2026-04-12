import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { PROFILE } from '../../../constants/routes/routes'
import { getCitizenColumns } from '../../../constants/citizen/citizen.columns'
import { useCitizens } from '../../../hooks/useCitizens'
import { usePrefetchCitizen } from '../../../hooks/usePrefetchCitizen'
import { useSelect } from '../../../hooks/useSelect'
import { useCitizenStore } from '../../../store/citizen.store'
import { useCitizenTableStore } from '../../../store/filter.store'
import type { Citizen } from '../../../types/models/citizen'
import { Table } from '../../ui/Table'
import { Filter } from './Filter'

export function DataTable() {
  const navigate = useNavigate()
  const { data, isLoading, error } = useCitizens()
  const selectedSort = useCitizenTableStore(s => s.selectedSort)
  const selectedGender = useCitizenTableStore(s => s.selectedGender)
  const selectedBirthPlace = useCitizenTableStore(s => s.selectedBirthPlace)
  const selectedMilitaryStatus = useCitizenTableStore(s => s.selectedMilitaryStatus)
  const selectedEducationLevel = useCitizenTableStore(s => s.selectedEducationLevel)
  const { setSelectedCitizenId } = useCitizenStore()
  const { prefetchData } = usePrefetchCitizen()
  const columns = useMemo(() => getCitizenColumns(), [])
  const sortedCitizens = useSelect(data, selectedSort, {
    selectedGender,
    selectedBirthPlace,
    selectedMilitaryStatus,
    selectedEducationLevel,
  })
  const hasSourceData = useMemo(() => (data?.length ?? 0) > 0, [data])
  const birthPlaceOptions = useMemo(
    () =>
      [...new Set((data ?? []).map(citizen => citizen.birthPlace))]
        .sort((a, b) => a.localeCompare(b, 'ru'))
        .map(value => ({ label: value, value })),
    [data],
  )

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="space-y-4">
      {hasSourceData && (
        <Filter
          birthPlaceOptions={birthPlaceOptions}
          visibleCount={sortedCitizens.length}
          totalCount={data?.length ?? 0}
        />
      )}
      <Table<Citizen>
        columns={columns}
        dataSource={sortedCitizens}
        rowKey="ID_Citizen"
        size="large"
        bordered
        loading={isLoading}
        onRow={(record: Citizen) => ({
          onClick: () => {
            setSelectedCitizenId(record.ID_Citizen)
            prefetchData(record.ID_Citizen)
            navigate(PROFILE)
          },
        })}
      />
    </div>
  )
}
