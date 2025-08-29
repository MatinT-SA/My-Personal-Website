"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Frontend", value: 6, color: "#60a5fa" }, // blue
  { name: "Backend", value: 4, color: "#34d399" }, // green
  { name: "Database", value: 3, color: "#facc15" }, // yellow
  { name: "Other", value: 5, color: "#f472b6" }, // pink
];

export default function SkillsCircle() {
  return (
    <div className="h-80 w-80">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={120}
            dataKey="value"
            paddingAngle={3}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
