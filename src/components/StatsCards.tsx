export function StatsCards() {
  const stats = [
    { label: 'Users', value: 100 },
    { label: 'New Signups', value: 15 },
    { label: 'Active', value: 70 },
    { label: 'Inactive', value: 30 },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map(({ label, value }) => (
        <div key={label} className="p-4 bg-white rounded-2xl shadow">
          <h2 className="text-sm text-gray-500">{label}</h2>
          <p className="mt-2 text-2xl font-semibold text-blue-600">{value}</p>
        </div>
      ))}
    </div>
  )
}
