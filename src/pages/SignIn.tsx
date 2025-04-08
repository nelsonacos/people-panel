import { SignIn } from '@clerk/clerk-react'

export function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <SignIn path="/sign-in" routing="path" afterSignInUrl="/dashboard" signUpUrl="/sign-up" />
    </div>
  )
}
