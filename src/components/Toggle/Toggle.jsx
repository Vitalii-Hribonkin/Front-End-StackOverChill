import s from "./Toggle.module.css";
import { useState } from "react";

const Toggle = () => {
  const [values, setFieldValue] = useState("income");
  return (
    <div className={s.toggleGroup}>
      <span className={s.span}>Income</span>
      <label className={s.toggle}>
        <input
          type="checkbox"
          className={s.toggleInput}
          //   checked={values.type === "expense"}
          onChange={() =>
            setFieldValue(
              "type",
              values.type === "income" ? "expense" : "income"
            )
          }
        />
        <span className={s.toggleSlider}></span>
      </label>
      <span className={s.span}>Expense</span>
    </div>
  );
};

export default Toggle;
