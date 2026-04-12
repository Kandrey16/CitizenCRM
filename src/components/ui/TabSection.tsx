type Props = {
  title: string
  children: React.ReactNode
  actions?: React.ReactNode
}

export function TabSection({ title, children, actions }: Props) {
  return (
    <section className="rounded-xl p-4">
      <div className="mb-3 flex items-center justify-between gap-4">
        <h3 className="font-semibold tracking-wide uppercase">{title}</h3>
        {actions && <div className="mt-4">{actions}</div>}
      </div>
      {children}
    </section>
  )
}
