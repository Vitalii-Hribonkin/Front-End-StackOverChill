import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import s from "./Chart.module.css";
import {
  selectStatistics,
  selectStatisticsIsIncome,
} from "../../redux/statistics/statisticsSelectors";
import { useSelector } from "react-redux";

// const data = [
//   { name: "Категорія 1", value: 10000 },
//   { name: "Категорія 2", value: 5000 },
//   { name: "Категорія 3", value: 25000 },
// ];

const COLORS = [
  "#50D1A2", // бірюзовий
  "#FCD7D8", // світло-рожевий
  "#D4A03A", // гірчичний
  "#6C63FF", // фіолетово-синій
  "#FF9F1C", // яскраво-оранжевий
  "#2EC4B6", // морська хвиля
  "#E71D36", // червоний
  "#FFBF69", // персиковий
  "#247BA0", // синій з відтінком бірюзи
  "#70C1B3", // м'ятний зелений
];

const Chart = () => {
  const statistics = useSelector(selectStatistics);
  const isIncome = useSelector(selectStatisticsIsIncome);
  // const total = data.reduce((acc, cur) => acc + cur.value, 0);

  const total = isIncome ? statistics.totalIncome : statistics.totalExpense;
  const data = isIncome ? statistics.income : statistics.expense;
  console.log("data: ", data);
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
