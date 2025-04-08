import { useState } from 'react'
import { Sidebar } from '../components/layout/Sidebar'
import { Topbar } from '../components/layout/Topbar'
import { StatsCards } from '../components/StatsCards'
import { GenderChart } from '../components/charts/GenderChart'
import { AgeChart } from '../components/charts/AgeChart'
import { CountryChart } from '../components/charts/CountryChart'

export function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-[#F5F7FA] text-gray-800">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-col flex-1">
        <Topbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 p-6 space-y-6">
          {/* Stats */}
          <section>
            <StatsCards />
          </section>

          {/* Charts */}
          <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <GenderChart />
            <AgeChart />
            <CountryChart />
          </section>
        </main>
      </div>
    </div>
  )
}
