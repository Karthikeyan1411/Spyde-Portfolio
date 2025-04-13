import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import "./TechStackChart.css";

const data = [
  { name: 'HTML', value: 23.5 },
  { name: 'CSS', value: 25 },
  { name: 'JS', value: 19.6 },
  { name: 'ReactJS', value: 17.6 },
  { name: 'Python', value: 5 },
  { name: 'Java', value: 5 },
  { name: 'MySQL', value: 10 },
  { name: 'NoSQL', value: 10 }
];

const COLORS = [
  '#00d9ff', '#0088FE', '#00C49F', '#FFBB28', '#FF8042',
  '#aa00ff', '#ff4c4c', '#1de9b6'
];

export default function TechStackChart() {
  return (
    <div className="chart-wrapper">
      <h3 className="chart-title">Tech Usage Overview</h3>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name }) =>
            `${name}`
          }
          outerRadius={130}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip className="tooltip" />
        <Legend />
      </PieChart>
    </div>
  );
}
