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

  const tooltipLabelFormatter = (value, name, props) => {
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
                className="cursor-pointer"
              />
            ))}
          </Pie>
          <Tooltip formatter={tooltipLabelFormatter} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
