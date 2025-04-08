import { ReactNode } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'wouter'
import { useUser } from '@clerk/clerk-react'

interface Props {
  children: ReactNode
}

export function ProtectedRoute({ children }: Props) {
  const { isLoaded, isSignedIn } = useUser()
  const [, navigate] = useLocation()

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate('/sign-in')
    }
  }, [isLoaded, isSignedIn, navigate])

  if (!isLoaded || !isSignedIn) return null

  return <>{children}</>
}
