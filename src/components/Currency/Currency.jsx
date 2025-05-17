import { useEffect } from 'react';
import s from './Currency.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrencyData,
  selectCurrencyError,
  selectCurrencyTime,
} from '../../redux/currency/currencySelectors';
import { fetchCurrency } from '../../redux/currency/currencyOperations';
import { resetCurrency } from '../../redux/currency/currencySlice';

const Currency = () => {
  const dispatch = useDispatch();
  const currencyTime = useSelector(selectCurrencyTime);
  const currencyData = useSelector(selectCurrencyData);
  const currencyError = useSelector(selectCurrencyError);

  useEffect(() => {
    if (!currencyTime || Date.now() > currencyTime) {
      dispatch(resetCurrency());
      dispatch(fetchCurrency());
    }
  }, []);

  return (
    <div className={s.container}>
      <table className={s.exchangeTable}>
        <thead>
          <tr>
            <th className={s.thLeft}>Currency</th>
            <th>Purchase</th>
            <th className={s.thRight}>Sale</th>
          </tr>
        </thead>
        <tbody>
          {currencyData.map((item) => (
            <tr className={s.items} key={item.name}>
              <td>{item.name}</td>
              <td>{item.purchase}</td>
              <td>{item.sale}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {currencyError && !currencyData.length && (
        <p className={s.error}>Currency is not avaliable</p>
      )}
    </div>
  );
};

export default Currency;
