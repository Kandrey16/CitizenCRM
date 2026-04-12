import { useCitizen } from '../../../hooks/useCitizen'
import { useCitizenStore } from '../../../store/citizen.store'
import { formatDate } from '../../../utils/formatDate'
import { formatImage } from '../../../utils/formatImage'

export function MainInfo() {
  const id = useCitizenStore(s => s.selectedCitizenId)
  const { data } = useCitizen(id)

  if (!data) return null

  return (
    <div className="space-y-4">
      <img
        className="h-64 w-64 rounded-xl object-cover"
        src={formatImage(data.gender)}
        alt={data.lastName}
      />
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">
          {data.lastName} {data.firstName} {data.middleName}
        </h1>

        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-row gap-2">
            <div className="mb-1 text-sm text-zinc-400">Дата рождения</div>
            <div className="font-semibold">{formatDate(data.birthDate)}</div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="mb-1 text-sm text-zinc-400">Телефон</div>
            <div className="font-semibold">{data.phone}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
