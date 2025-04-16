import { lazy } from 'react'

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  USERS: '/users',
  REPORTS: '/reports',
  SMART_QUERY_LAB: '/smart-query-lab',
  SETTINGS: '/settings',
}

export const DashboardPage = lazy(() => import('../pages/Dashboard'))
export const UsersPage = lazy(() => import('../pages/Users'))
export const ReportsPage = lazy(() => import('../pages/Reports'))
export const SmartQueryLabPage = lazy(() => import('../pages/SmartQueryLab'))
export const SettingsPage = lazy(() => import('../pages/Settings'))

export const preloadRoutes = {
  DASHBOARD: () => import('../pages/Dashboard'),
  USERS: () => import('../pages/Users'),
  REPORTS: () => import('../pages/Reports'),
  SMART_QUERY_LAB: () => import('../pages/SmartQueryLab'),
  SETTINGS: () => import('../pages/Settings'),
}
