import { useCitizen } from '../../../hooks/useCitizen'
import { useCitizenStore } from '../../../store/citizen.store'
import { CitizenCard } from './CitizenCard'

export default function CitizenInfo() {
  const { selectedCitizenId } = useCitizenStore()
  const { isLoading, error } = useCitizen(selectedCitizenId)

  if (selectedCitizenId == null) {
    return <div className="text-zinc-400">Выберите гражданина в таблице</div>
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return <CitizenCard />
}
