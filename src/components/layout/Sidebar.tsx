import { X } from 'lucide-react'
import { Link } from 'wouter'
import { navItems } from './'

interface Props {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: Props) {
  return (
    <aside
      data-testid="sidebar"
      className={`fixed inset-y-0 left-0 z-30 w-64 bg-white text-gray-800 border-r border-gray-200 transform transition-transform ${
        open ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static`}
    >
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 lg:hidden">
        <span className="text-lg font-semibold">Menu</span>
        <button onClick={onClose}>
          <X className="w-6 h-6 text-gray-500" />
        </button>
      </div>

      <nav className="flex flex-col gap-1 px-4 lg:px-6 lg:py-6">
        {navItems.map(({ icon: Icon, label, href, preload }) => (
          <Link
            key={label}
            href={href}
            onMouseEnter={preload}
            className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors text-sm font-medium"
          >
            <Icon className="w-5 h-5 text-gray-500" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
