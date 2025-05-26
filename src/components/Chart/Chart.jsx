import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import s from "./Chart.module.css";



const Chart = ({data, total, colors}) => {
 

  return (
    <div className={s.chartContainer}>
      <ResponsiveContainer width="100%" height="100%" className={s.chartSvg}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="75%"
            outerRadius="103%"
            dataKey="sum"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className={s.centerText}>
        ₴ {total.toLocaleString("uk-UA", { minimumFractionDigits: 2 })}
      </div>
    </div>
  );
};

export default Chart;
