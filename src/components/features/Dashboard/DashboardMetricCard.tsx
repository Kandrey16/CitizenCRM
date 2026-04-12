type Props = {
  label: string
  value: string | number
}

export function DashboardMetricCard({ label, value }: Props) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
      <div className="text-sm text-zinc-500">{label}</div>
      <div className="mt-2 text-2xl font-semibold text-zinc-900">{value}</div>
    </div>
  )
}
