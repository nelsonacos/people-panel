import { ReactNode } from 'react'
import { ClerkProvider } from '@clerk/clerk-react'
import { render } from '@testing-library/react'

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

export function renderWithClerk(ui: ReactNode) {
  return render(<ClerkProvider publishableKey={clerkPubKey}>{ui}</ClerkProvider>)
}
