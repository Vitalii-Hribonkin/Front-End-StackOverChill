import Chart from "../../components/Chart/Chart";
import StatisticsDashboard from "../../components/StatisticsDashboard/StatisticsDashboard";
import Toggle from "../../components/Toggle/Toggle";
import s from "./StatisticsTab.module.css";

const StatisticsTab = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Toggle />
        <Chart />
      </div>
      <div>
        <StatisticsDashboard />
        <div><div/>
      </div>
    </div>
  );
};

export default StatisticsTab;
