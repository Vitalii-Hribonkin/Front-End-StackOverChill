import { useSelector } from 'react-redux';
import s from './Balance.module.css';
import { selectUser } from '../../redux/user/userSelectors';
import { replace } from 'formik';

const Balance = () => {
  const user = useSelector(selectUser);

  const formatSum = (sum) => {
    return sum.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className={s.balance}>
      <p className={s.title}>Your balance</p>
      <h2 className={s.amount}>
        {user.balance !== 0 && formatSum(user.balance).replace(',', ' ')} UAH
      </h2>
    </div>
  );
};

export default Balance;
