import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const COLORS = ['#00C49F', '#FFBB28', '#FF8042']

const data = [
  { name: 'Low', value: 4 },
  { name: 'Medium', value: 2 },
  { name: 'High', value: 2 },
]

export default function RiskChart() {
  return (
    <div className="mt-10">
      <h3 className="text-lg font-semibold mb-4">Distribución de Riesgo Simulada</h3>
      <PieChart width={320} height={240}>
        <Pie
          data={data}
          cx={150}
          cy={120}
          labelLine={false}
          label={({ name }) => name}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  )
}
