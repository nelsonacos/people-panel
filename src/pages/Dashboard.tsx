import { StatsCards } from '../components/StatsCards'
import { GenderChart } from '../components/charts/GenderChart'
import { AgeChart } from '../components/charts/AgeChart'
import { CountryChart } from '../components/charts/CountryChart'

export function Dashboard() {
  return (
    <main className="flex-1 p-6 space-y-6">
      <section>
        <StatsCards />
      </section>
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <GenderChart />
        <AgeChart />
        <CountryChart />
      </section>
    </main>
  )
}

export default Dashboard
