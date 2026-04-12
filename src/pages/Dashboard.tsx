import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'
import { Bar, Doughnut, Line } from 'react-chartjs-2'

import { DashboardChartCard } from '../components/features/Dashboard/DashboardChartCard'
import { DashboardMetricCard } from '../components/features/Dashboard/DashboardMetricCard'
import { useCitizens } from '../hooks/useCitizens'
import { useDashboardAnalytics } from '../hooks/useDashboardAnalytics'

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
)

export default function DashboardPage() {
  const { data, isLoading, error } = useCitizens()
  const {
    metrics,
    genderChartData,
    educationChartData,
    militaryChartData,
    createdByMonthChartData,
    topBirthPlacesChartData,
  } = useDashboardAnalytics(data)

  if (isLoading) {
    return <div className="p-6 text-sm text-zinc-600">Загрузка дашборда...</div>
  }

  if (error) {
    return <div className="p-6 text-sm text-red-700">Ошибка: {error.message}</div>
  }

  if (!data || data.length === 0) {
    return <div className="p-6 text-sm text-zinc-600">Нет данных для визуализации</div>
  }

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div>
        <h1 className="text-2xl font-semibold text-zinc-900">Dashboard</h1>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardMetricCard label="Всего граждан" value={metrics.total} />
        <DashboardMetricCard label="Средний возраст" value={`${metrics.averageAge} лет`} />
        <DashboardMetricCard label="Заполнены контакты" value={metrics.contactsFilled} />
        <DashboardMetricCard label="Обновлены за 30 дней" value={metrics.updatedLast30Days} />
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <DashboardChartCard title="Распределение по полу">
          <Doughnut
            data={genderChartData}
            options={{ maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }}
          />
        </DashboardChartCard>

        <DashboardChartCard title="Уровень образования">
          <Bar
            data={educationChartData}
            options={{ maintainAspectRatio: false, plugins: { legend: { display: false } } }}
          />
        </DashboardChartCard>

        <DashboardChartCard title="Воинский учет">
          <Bar
            data={militaryChartData}
            options={{ maintainAspectRatio: false, plugins: { legend: { display: false } } }}
          />
        </DashboardChartCard>

        <DashboardChartCard title="Топ мест рождения">
          <Bar
            data={topBirthPlacesChartData}
            options={{
              maintainAspectRatio: false,
              indexAxis: 'y',
              plugins: { legend: { display: false } },
            }}
          />
        </DashboardChartCard>
      </section>

      <DashboardChartCard title="Динамика создания карточек">
        <Line
          data={createdByMonthChartData}
          options={{
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom' } },
          }}
        />
      </DashboardChartCard>
    </div>
  )
}
