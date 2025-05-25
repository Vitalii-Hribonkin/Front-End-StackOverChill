import { useSelector } from 'react-redux';
import s from './Balance.module.css'
import { selectUser } from '../../redux/user/userSelectors';

const Balance = () => {
  const user = useSelector(selectUser)
  return (
    <div className={s.balance}>
      <p className={s.title}>Your balance</p>
      <h2 className={s.amount}>{user.balance} UAH</h2>
    </div>
  );
}

export default Balance