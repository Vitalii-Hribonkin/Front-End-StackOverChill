import { useEffect } from "react";
import AddTransactionForm from "../AddTransactionForm/AddTransactionForm";
import s from "./ModalAddTransaction.module.css";

const ModalAddTransaction = ({ onClose }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <button className={s.close} onClick={onClose}>
          <svg width="18" height="18">
            <use href="/icons.svg#close"></use>
          </svg>
        </button>
        <AddTransactionForm onCancel={onClose} />
      </div>
    </div>
  );
};

export default ModalAddTransaction;
