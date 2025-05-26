import toast from "react-hot-toast";
import ModalEditTransaction from "../ModalEditTransaction/ModalEditTransaction";
import ModalConfirmDelete from "../ModalConfirmDelete/ModalConfirmDelete";
import { useState } from 'react';
import s from "./TransactionsItem.module.css";
import { useDispatch } from "react-redux"; 
import { deleteTransaction } from "../../../redux/transactions/transactionsOperations"; 

const TransactionsItem = ({ transaction, index }) => {
  const dispatch = useDispatch(); 

  const [showEdit, setShowEdit] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const { date, category, comment, amount, _id } = transaction;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const formatSum = (sum) => {
    return sum.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const rowClass = index % 2 === 0 ? s.evenRow : s.oddRow;
  const isIncome = category.type === 'income';
  const transactionTypeClass = isIncome ? s.income : s.expense;

  const handleDelete = () => {
    dispatch(deleteTransaction(_id))
      .unwrap()
      .then(() => {
        toast.success(`Successfully deleted!`);
        setShowDeleteConfirm(false);
      })
      .catch(() => {
        toast.error("Failed to delete transaction");
      });
  };

  return (
    <div className={`${s.transactionWrapper} ${rowClass}`}>
      {/* Табличне представлення (десктоп) */}
      <div className={s.transactionTableRow}>
        <div className={s.date}>{formatDate(date)}</div>
        <div className={`${s.transactionCell} ${s.typeCell}`}>
          {isIncome ? '+' : '-'}
        </div>
        <div className={s.category}>{category.name}</div>
        <div className={s.comment}>{comment}</div>
        <div className={s.sum}>{formatSum(amount)}</div>
        <div className={s.actions}>
          <button className={s.edit} onClick={() => setShowEdit(true)}>
            <svg className={s.svgEditIcon} width='14' height='14'>
              <use href='/icons.svg#edit'></use>
            </svg>
            <span className={s.label}>Edit</span>
          </button>
          <div className={s.svgButton}>
            <button
              className={s.delete}
              onClick={() => setShowDeleteConfirm(true)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Мобільне представлення (з кольоровою смужкою) */}
      <div className={`${s.transactionCard} ${transactionTypeClass}`}>
        <div className={s.mobileView}>
          <div className={s.mobileField}>
            <span className={s.fieldName}>Date</span>
            <span className={s.fieldValue}>{formatDate(date)}</span>
          </div>
          <div className={s.mobileField}>
            <span className={s.fieldName}>Type</span>
            <span className={s.fieldValue}>{isIncome ? '+' : '-'}</span>
          </div>
          <div className={s.mobileField}>
            <span className={s.fieldName}>Category</span>
            <span className={s.fieldValue}>{category.name}</span>
          </div>
          <div className={s.mobileField}>
            <span className={s.fieldName}>Comment</span>
            <span className={s.fieldValue}>{comment}</span>
          </div>
          <div className={s.mobileField}>
            <span className={s.fieldName}>Sum</span>
            <span className={`${s.fieldValue} ${isIncome ? s.sumPositive : s.sumNegative}`}>
              {amount.toLocaleString()}
            </span>
          </div>
          <div className={s.actions}>
            <div className={s.svgButton}>
              <svg className={s.svgEdit} width='14' height='14'>
                <use href='/icons.svg#edit'></use>
              </svg>
              <button
                className={s.delete}
                onClick={() => setShowDeleteConfirm(true)}
              >
                Delete
              </button>
            </div>
            <button className={s.edit} onClick={() => setShowEdit(true)}>
              <svg className={s.svgEditIcon} width='14' height='14'>
                <use href='/icons.svg#edit'></use>
              </svg>
              <span className={s.label}>Edit</span>
            </button>
          </div>
        </div>
      </div>

      {/* Модалки */}
      {showDeleteConfirm && (
        <ModalConfirmDelete
          onConfirm={handleDelete}
          onCancel={() => setShowDeleteConfirm(false)}
          onClose={() => setShowDeleteConfirm(false)}
        />
      )}

      {showEdit && (
        <ModalEditTransaction
          transaction={transaction}
          onClose={() => setShowEdit(false)}
        />
      )}
    </div>
  );
};

export default TransactionsItem;
