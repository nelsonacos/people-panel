import { Route, Switch } from 'wouter'
import { ProtectedRoute, RedirectHome } from './components'
import { SignInPage, SignUpPage, Dashboard } from './pages'
import './App.css'

function App() {
  return (
    <Switch>
      <Route path="/">
        <RedirectHome />
      </Route>

      <Route path="/dashboard">
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      </Route>

      <Route path="/sign-in">
        <SignInPage />
      </Route>

      <Route path="/sign-up">
        <SignUpPage />
      </Route>
    </Switch>
  )
}

export default App
