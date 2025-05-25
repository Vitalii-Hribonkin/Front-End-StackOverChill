import s from './ModalEditTransaction.module.css';
import EditTransactionForm from '../EditTransactionForm/EditTransactionForm';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const ModalEditTransaction = ({ transaction, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const isTab = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <div className={s.backdrop} onClick={handleClose}>
      <div className={s.modal}>
        <button type='button' className={s.closeBtn} onClick={onClose}>
          {isTab ? (
            <svg width='18' height='18' className={s.icon}>
              <use href='/icons.svg#close'></use>
            </svg>
          ) : (
            <svg width='20' height='20' className={s.icon}>
              <use href='/icons.svg#close-1'></use>
            </svg>
          )}
        </button>
        <EditTransactionForm
          transaction={transaction}
          onClose={() => onClose()}
        />
      </div>
    </div>
  );
};

export default ModalEditTransaction;
