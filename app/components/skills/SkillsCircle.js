"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Frontend", value: 8, color: "#3b82f6" }, // blue
  { name: "Backend", value: 5, color: "#22c55e" }, // green
  { name: "Databases", value: 3, color: "#facc15" }, // yellow
  { name: "Other", value: 4, color: "#a855f7" }, // purple
];

export default function SkillsCircle() {
  return (
    <div className="h-[300px] w-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={5}
            startAngle={90}
            endAngle={450}
          >
            {data.map((entry, i) => (
              <Cell
                key={i}
                fill={entry.color}
                stroke="#fff"
                strokeWidth={1.5}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
