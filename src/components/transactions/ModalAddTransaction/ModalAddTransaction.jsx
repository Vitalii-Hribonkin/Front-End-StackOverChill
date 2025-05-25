import { useEffect } from "react";
import s from "./ModalAddTransaction.module.css";
import AddTransactionForm from "../AddTransactionForm/AddTransactionForm";

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
    <div
      className={s.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
    >
      <div className={s.modal}>
        <button className={s.close} onClick={onClose}>
          <svg className={s.svg} width="16" height="16">
            <use href="/icons.svg#close"></use>
          </svg>
        </button>
        <div>
          <AddTransactionForm/>
        </div>
      </div>
    </div>
  );
};

export default ModalAddTransaction;
