import { useSelector } from 'react-redux';
import s from './StatisticsTable.module.css';
import { selectStatisticsIsIncome } from '../../redux/statistics/statisticsSelectors';

const formatSum = (sum) => {
  return sum.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const StatisticsTable = ({ data, colors, total }) => {
  const isIncome = useSelector(selectStatisticsIsIncome);

  return (
    <>
      <ul className={s.titleList}>
        <p>Category</p>
        <p>Sum</p>
      </ul>
      <ul className={s.list}>
        {data.map((item, i) => (
          <li className={s.item} key={colors[i]}>
            <div
              className={s.pieColor}
              style={{
                backgroundColor: colors[i],
              }}
            ></div>
            <div className={s.itemWrapper}>
              <p>{item.name}</p>
              <p>{formatSum(item.sum).replace(',', ' ')}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className={s.expenses}>
        {isIncome ? 'Incomes:' : 'Expenses:'}{' '}
        <span className={isIncome ? s.income : s.expense}>
          {formatSum(total).replace(',', ' ')}
        </span>
      </p>
    </>
  );
};
export default StatisticsTable;
