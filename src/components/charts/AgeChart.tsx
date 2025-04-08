import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const ageData = [
  { ageRange: '18-25', count: 12 },
  { ageRange: '26-35', count: 24 },
  { ageRange: '36-50', count: 18 },
  { ageRange: '51+', count: 6 },
]

export function AgeChart() {
  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h3 className="mb-4 text-lg font-medium text-gray-700">Age Ranges</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={ageData}>
          <XAxis dataKey="ageRange" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#60a5fa" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
