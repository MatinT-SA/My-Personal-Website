// app/components/skills/SkillsCircle.js
"use client";

import { useCallback } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// No more local data variable; it will be passed as a prop from the parent
export default function SkillsCircle({ data, onSliceClick }) {
  // New handler function to pass the clicked slice's name back to the parent
  const handleSliceClick = useCallback(
    (data, index) => {
      if (onSliceClick) {
        onSliceClick(data.name);
      }
    },
    [onSliceClick]
  );

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
            onClick={handleSliceClick} // Attach the new click handler
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
