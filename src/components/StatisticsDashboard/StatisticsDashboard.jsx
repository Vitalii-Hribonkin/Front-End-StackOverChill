import { useEffect, useState } from 'react';
import StatisticsTable from '../StatisticsTable/StatisticsTable';
import Select from 'react-select';
import s from './StatisticsDashboard.module.css';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import { getStatistics } from '../../redux/statistics/statisticsOperations';

const monthOptions = [
  { value: '01', label: 'January' },
  { value: '02', label: 'February' },
  { value: '03', label: 'March' },
  { value: '04', label: 'April' },
  { value: '05', label: 'May' },
  { value: '06', label: 'June' },
  { value: '07', label: 'July' },
  { value: '08', label: 'August' },
  { value: '09', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' },
];
const yearOptions = [
  { value: '2025', label: '2025' },
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' },
  { value: '2022', label: '2022' },
  { value: '2021', label: '2021' },
  { value: '2020', label: '2020' },
];
const StatisticsDashboard = ({ data, colors, total }) => {
  const dispatch = useDispatch();
  const isTab = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isDesk = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  const [formValues, setFormValues] = useState({
    month: monthOptions.find(
      (item) => item.value === currentMonth.toString().padStart(2, '0'),
    ),
    year: yearOptions.find((item) => item.value === currentYear.toString()),
  });
  const customSelectStyles = {
    control: (base) => ({
      ...base,
      background: 'linear-gradient(180deg, #355359 0%, #3B5D63 100%)',
      border: '1px solid #FCFCFC',
      borderRadius: '8px',
      padding: '2px 6px',
      minWidth: isDesk ? '187px' : isTab ? '148px' : '122px',
      height: '44px',
      color: 'white',
      fontSize: '16px',
      fontWeight: 500,
      boxShadow: 'none',
      cursor: 'pointer',
    }),
    singleValue: (base) => ({
      ...base,
      color: 'white',
    }),
    menu: (base) => ({
      ...base,
      background: 'linear-gradient(180deg, #294045 0%, #1E2F33 100%)',
      color: 'white',
      borderRadius: '8px',
      marginTop: '4px',
      zIndex: 5,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? '#4A747B' : 'transparent',
      color: 'white',
      cursor: 'pointer',
      padding: '10px 12px',
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: 'white',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
  };
  useEffect(() => {
    dispatch(
      getStatistics(`${formValues.year.value}-${formValues.month.value}`),
    );
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
      <StatisticsTable data={data} total={total} colors={colors} />
    </div>
  );
};
export default StatisticsDashboard;
