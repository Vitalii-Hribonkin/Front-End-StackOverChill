import { useDispatch, useSelector } from "react-redux";
import { toggleIsIncome } from "../../redux/statistics/statisticsSlice";
import s from "./Toggle.module.css";
import { selectStatisticsIsIncome } from "../../redux/statistics/statisticsSelectors";

const Toggle = () => {
  const dispatch = useDispatch();
  const isIncome = useSelector(selectStatisticsIsIncome);
  return (
    <div className={s.toggleGroup}>
      <span className={s.span}>Income</span>
      <label className={s.toggle}>
        <input
          type="checkbox"
          className={s.toggleInput}
          checked={!isIncome}
          onChange={
            () => dispatch(toggleIsIncome())
          }
        />
        <span className={s.toggleSlider}></span>
      </label>
      <span className={s.span}>Expense</span>
    </div>
  );
};

export default Toggle;
