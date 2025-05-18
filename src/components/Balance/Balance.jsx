import s from './Balance.module.css'

const Balance = () => {
  return (
    <div className={s.balance}>
      <p className={s.title}>Your balance</p>
      <h2 className={s.amount}>24 000.00 UAH</h2>
    </div>
  );
}

export default Balance