import { useState } from "react";
import ModalAddTransaction from "../ModalAddTransaction/ModalAddTransaction";
import s from "./ButtonAddTransaction.module.css";
import { useDispatch } from "react-redux";
import { setIsIncome } from "../../../redux/categories/categoriesSlice";

const ButtonAddTransaction = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(setIsIncome(false));
    setShowModal(prev => !prev);
  }

  return (
    <>
      <button className={s.btn} onClick={toggleModal}>
        <svg className={s.svg} width="25" height="25">
          <use href="/icons.svg#plus"></use>
        </svg>
      </button>

      {showModal && <ModalAddTransaction onClose={toggleModal} />}
    </>
  );
};

export default ButtonAddTransaction;
