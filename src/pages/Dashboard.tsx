import { UserButton } from '@clerk/clerk-react'

export function Dashboard() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <UserButton />
      </div>
    </div>
  )
}
