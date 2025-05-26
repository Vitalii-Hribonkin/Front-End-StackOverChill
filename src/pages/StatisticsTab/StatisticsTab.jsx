import { useSelector } from "react-redux";
import Chart from "../../components/Chart/Chart";
import StatisticsDashboard from "../../components/StatisticsDashboard/StatisticsDashboard";
import Toggle from "../../components/Toggle/Toggle";
import s from "./StatisticsTab.module.css";
import { selectStatistics, selectStatisticsIsIncome } from "../../redux/statistics/statisticsSelectors";

const COLORS = [
  '#50D1A2', // бірюзовий
  '#FCD7D8', // світло-рожевий
  '#D4A03A', // гірчичний
  '#6C63FF', // фіолетово-синій
  '#FF9F1C', // яскраво-оранжевий
  '#2EC4B6', // морська хвиля
  '#E71D36', // червоний
  '#FFBF69', // персиковий
  '#247BA0', // синій з відтінком бірюзи
  '#70C1B3', // м'ятний зелений
];


const StatisticsTab = () => {
   const statistics = useSelector(selectStatistics);
   const isIncome = useSelector(selectStatisticsIsIncome);
   const total = isIncome ? statistics.totalIncome : statistics.totalExpense;
  const categories = isIncome ? statistics.income : statistics.expense;
  
   const data = categories
     .filter(({ sum }) => sum !== 0)


  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Toggle />
        <Chart data={data} total={total} colors={COLORS} />
      </div>
      <StatisticsDashboard data={data} total={total} colors={COLORS} />
    </div>
  );
};

export default StatisticsTab;
