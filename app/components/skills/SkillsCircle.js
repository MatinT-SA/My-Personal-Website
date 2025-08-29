"use client";

import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Frontend", value: 8, color: "#3b82f6" }, // blue
  { name: "Backend", value: 4, color: "#22c55e" }, // green
  { name: "Databases", value: 3, color: "#facc15" }, // yellow
  { name: "Other", value: 5, color: "#a855f7" }, // purple
];

export default function SkillsCircle() {
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        outerRadius={120}
        innerRadius={60}
        paddingAngle={5}
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}
