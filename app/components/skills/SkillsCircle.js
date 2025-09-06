// app/components/skills/SkillsCircle.js
"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useCallback } from "react";

export default function SkillsCircle({ data, onSliceClick }) {
  const handleSliceClick = useCallback(
    (data, index) => {
      if (onSliceClick) {
        onSliceClick(data.name);
      }
    },
    [onSliceClick]
  );

  // A custom formatter function to display both the name and value.
  const tooltipLabelFormatter = (value, name, props) => {
    // Recharts expects an array of strings or numbers for the tooltip content.
    // The first element is the value, the second is the name.
    // We can return a formatted label instead.
    const categoryName = props.payload.name;
    const skillCount = props.payload.value;
    return [`${categoryName}: ${skillCount}`];
  };

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
            onClick={handleSliceClick}
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
          {/* Add the Tooltip component here with the updated formatter */}
          <Tooltip formatter={tooltipLabelFormatter} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
