import { useEffect, useState } from "react";
import StatisticsTable from "../StatisticsTable/StatisticsTable";
import Select from "react-select";
import s from "./StatisticsDashboard.module.css";

const monthOptions = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const yearOptions = [
  { value: "2025", label: "2025" },
  { value: "2024", label: "2024" },
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
];

const customSelectStyles = {
  control: (base) => ({
    ...base,
    background: "linear-gradient(180deg, #355359 0%, #3b5d63 100%)",
    border: "1px solid #fcfcfc",
    borderRadius: "8px",
    padding: "2px 6px",
    width: "187px",
    height: "44px",
    color: "white",
    fontSize: "16px",
    fontWeight: 500,
    boxShadow: "none",
    cursor: "pointer",
  }),
  singleValue: (base) => ({
    ...base,
    color: "white",
  }),
  menu: (base) => ({
    ...base,
    background: "linear-gradient(180deg, #294045 0%, #1e2f33 100%)",
    color: "white",
    borderRadius: "8px",
    marginTop: "4px",
    zIndex: 5,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#4a747b" : "transparent",
    color: "white",
    cursor: "pointer",
    padding: "10px 12px",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "white",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const StatisticsDashboard = () => {
  const [formValues, setFormValues] = useState({
    month: monthOptions[5],
    year: yearOptions[0],
  });

  useEffect(() => {
    console.log("Month:", formValues.month.value);
    console.log("Year:", formValues.year.value);
  }, [formValues]);

  return (
    <div>
      <div className={s.form}>
        <Select
          className={s.select}
          options={monthOptions}
          value={formValues.month}
          onChange={(selected) =>
            setFormValues((prev) => ({ ...prev, month: selected }))
          }
          styles={customSelectStyles}
        />
        <Select
          className={s.select}
          options={yearOptions}
          value={formValues.year}
          onChange={(selected) =>
            setFormValues((prev) => ({ ...prev, year: selected }))
          }
          styles={customSelectStyles}
        />
      </div>
      <StatisticsTable />
    </div>
  );
};

export default StatisticsDashboard;
