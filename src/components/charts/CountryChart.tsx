import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const countryData = [
  { country: 'USA', users: 18 },
  { country: 'Canada', users: 12 },
  { country: 'UK', users: 15 },
  { country: 'Germany', users: 8 },
]

export function CountryChart() {
  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h3 className="mb-4 text-lg font-medium text-gray-700">Users by Country</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={countryData}>
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="users" fill="#34d399" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
