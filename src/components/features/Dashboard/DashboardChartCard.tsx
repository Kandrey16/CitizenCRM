import type { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

export function DashboardChartCard({ title, children }: Props) {
  return (
    <section className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-base font-semibold text-zinc-900">{title}</h2>
      <div className="h-80">{children}</div>
    </section>
  )
}
