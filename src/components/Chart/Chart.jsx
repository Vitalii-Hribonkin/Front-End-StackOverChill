import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import s from "./Chart.module.css";
import { selectStatistics } from "../../redux/statistics/statisticsSelectors";
import { useSelector } from "react-redux";

const data = [
  { name: "Категорія 1", value: 10000 },
  { name: "Категорія 2", value: 5000 },
  { name: "Категорія 3", value: 25000 },
];

const COLORS = ["#50D1A2", "#FCD7D8", "#D4A03A"];

const Chart = () => {
  const statistics = useSelector(selectStatistics);
  // const total = data.reduce((acc, cur) => acc + cur.value, 0);
  const total = statistics.totalExpense;
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
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
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
