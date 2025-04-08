import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

const COLORS = ['#60a5fa', '#f472b6']
const genderData = [
  { name: 'Male', value: 60 },
  { name: 'Female', value: 40 },
]

export function GenderChart() {
  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h3 className="mb-4 text-lg font-medium text-gray-700">Gender Distribution</h3>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={genderData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            dataKey="value"
          >
            {genderData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
