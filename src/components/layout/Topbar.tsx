import { Menu } from 'lucide-react'
import { UserButton } from '@clerk/clerk-react'

interface Props {
  toggleSidebar: () => void
}

export function Topbar({ toggleSidebar }: Props) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      <button className="lg:hidden" onClick={toggleSidebar}>
        <Menu className="w-6 h-6 text-gray-600" />
      </button>

      <h1 className="text-xl font-bold">People Panel</h1>

      <div className="flex items-center gap-4">
        <UserButton />
      </div>
    </header>
  )
}
