import clsx from 'clsx';
import s from './TypeButton.module.css';
import { useMediaQuery } from 'react-responsive';

const TypeButton = ({ onClick, income, isEdit }) => {
  const isTab = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <div className={s.typeContainer}>
      <p>Income</p>
      <button className={s.typeBtn} onClick={onClick} disabled={isEdit}>
        <span
          className={clsx(
            s.ellipse,
            !income && s.slide,
            !isEdit && s.transition,
            isTab && income && s.circle,
            isTab && !income && s.red,
          )}
        >
          {!isTab && (
            <svg
              width='49'
              height='45'
              className={clsx(
                s.iconBg,
                !income && s.expense,
                !isEdit && s.transition,
              )}
            >
              <use href='/icons.svg#ellipse'></use>
            </svg>
          )}
          {income ? (
            !isTab ? (
              <svg width='31' height='29' className={s.icon}>
                <use href='/icons.svg#plus-2'></use>
              </svg>
            ) : (
              <svg width='20' height='20' className={s.plus}>
                <use href='/icons.svg#plus'></use>
              </svg>
            )
          ) : (
            <span className={s.minus}></span>
          )}
        </span>
      </button>
      <p>Expense</p>
    </div>
  );
};

export default TypeButton;
