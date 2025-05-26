import { useDispatch } from "react-redux";
import { toggleIsIncome } from "../../redux/statistics/statisticsSlice";
import s from "./Toggle.module.css";

const Toggle = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.toggleGroup}>
      <span className={s.span}>Income</span>
      <label className={s.toggle}>
        <input
          type="checkbox"
          className={s.toggleInput}
          //   checked={values.type === "expense"}
          onChange={
            () => dispatch(toggleIsIncome())
            // setFieldValue(

            // "type",
            // values.type === "income" ? "expense" : "income"
            // )
          }
        />
        <span className={s.toggleSlider}></span>
      </label>
      <span className={s.span}>Expense</span>
    </div>
  );
};

export default Toggle;
