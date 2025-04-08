import { Suspense, useState } from 'react'
import { Route, Switch } from 'wouter'
import { ProtectedRoute, RedirectHome } from './components'
import { Sidebar } from './components/layout/Sidebar'
import { Topbar } from './components/layout/Topbar'
import { SignInPage, SignUpPage, Dashboard, Users, Reports, Settings } from './pages'

import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Suspense fallback={<div className="p-4 text-gray-500">Loading...</div>}>
      <div className="flex min-h-screen bg-[#F5F7FA] text-gray-800">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex flex-col flex-1">
          <Topbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <main className="flex-1 p-6 space-y-6">
            <Switch>
              <Route path="/">
                <RedirectHome />
              </Route>

              <Route path="/dashboard">
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              </Route>

              <Route path="/users">
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              </Route>

              <Route path="/reports">
                <ProtectedRoute>
                  <Reports />
                </ProtectedRoute>
              </Route>

              <Route path="/settings">
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              </Route>

              <Route path="/sign-in">
                <SignInPage />
              </Route>

              <Route path="/sign-up">
                <SignUpPage />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </Suspense>
  )
}

export default App
