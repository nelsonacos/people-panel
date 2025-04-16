import { LayoutDashboard, Users, LineChart, FlaskConical, Settings } from 'lucide-react'
import { ROUTES, preloadRoutes } from '../../routes'
export const navItems = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    href: ROUTES.DASHBOARD,
    preload: preloadRoutes.DASHBOARD,
  },
  {
    icon: Users,
    label: 'Users',
    href: ROUTES.USERS,
    preload: preloadRoutes.USERS,
  },
  {
    icon: LineChart,
    label: 'Reports',
    href: ROUTES.REPORTS,
    preload: preloadRoutes.REPORTS,
  },
  {
    icon: FlaskConical,
    label: 'Smart Query',
    href: ROUTES.SMART_QUERY_LAB,
    preload: preloadRoutes.SMART_QUERY_LAB,
  },
  {
    icon: Settings,
    label: 'Settings',
    href: ROUTES.SETTINGS,
    preload: preloadRoutes.SETTINGS,
  },
]
