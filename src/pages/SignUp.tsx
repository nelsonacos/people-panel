import { SignUp } from '@clerk/clerk-react'

export function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <SignUp path="/sign-up" routing="path" afterSignInUrl="/dashboard" signInUrl="/sign-in" />
    </div>
  )
}
