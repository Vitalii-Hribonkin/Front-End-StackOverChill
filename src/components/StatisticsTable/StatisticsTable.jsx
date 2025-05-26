import s from './StatisticsTable.module.css';

const StatisticsTable = () => {


  return (
    <>
      <ul className={s.titleList}>
        <p>Category</p>
        <p>Sum</p>
      </ul>
      <ul className={s.list}>
        <li className={s.item}>
          <div className={s.pieColor}></div>
          <div className={s.itemWrapper}>
            <p>Category</p>
            <p>Amount</p>
          </div>
        </li>
        <li className={s.item}>
          <div className={s.pieColor}></div>
          <div className={s.itemWrapper}>
            <p>Category</p>
            <p>Amount</p>
          </div>
        </li>
        <li className={s.item}>
          <div className={s.pieColor}></div>
          <div className={s.itemWrapper}>
            <p>Category</p>
            <p>Amount</p>
          </div>
        </li>
      </ul>
      <p className={s.expenses}>Expenses:<span className={s.expense}>14000</span></p>
    </>
  );
};
export default StatisticsTable;
