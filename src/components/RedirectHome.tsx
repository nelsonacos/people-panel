import { useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'
import { useLocation } from 'wouter'

export function RedirectHome() {
  const { isSignedIn, isLoaded } = useUser()
  const [, navigate] = useLocation()

  useEffect(() => {
    if (!isLoaded) return
    if (isSignedIn) {
      navigate('/dashboard')
    } else {
      navigate('/sign-in')
    }
  }, [isLoaded, isSignedIn, navigate])

  return null
}
