
import ModalEditTransaction from "../ModalEditTransaction/ModalEditTransaction";
import { useState } from 'react';
import s from "./TransactionsItem.module.css";

const TransactionsItem = ({ transaction, index }) => {

  const [showEdit, setShowEdit] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const { date, type, category, comment, sum } = transaction;
  const rowClass = index % 2 === 0 ? s.evenRow : s.oddRow;
  const handleDelete = () => {
    // backend
    setShowDeleteConfirm(false);
  }

  return (
    <div className={`${s.transactionWrapper} ${rowClass} ${type === "+" ? s.income : s.expense}`}>
      <div className={s.transactionTableRow}>
        <div className={s.date}>{date}</div>
        <div className={`${s.transactionCell} ${type === "+" || type === "-" ? s.typeCell : ""}`}>{type}</div>
        <div className={s.category}>{category}</div>
        <div className={s.comment}>{comment}</div>
        <div className={s.sum}>{sum.toLocaleString()}</div>
        <div className={s.actions}>
          <button className={s.edit} onClick={() => setShowEdit(true)}>
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4999 6.33343L8.1666 4.0001M1.45825 13.0418L3.43247 12.8224C3.67367 12.7956 3.79427 12.7822 3.907 12.7457C4.007 12.7133 4.10218 12.6676 4.18994 12.6097C4.28885 12.5445 4.37465 12.4587 4.54626 12.2871L12.2499 4.58343C12.8943 3.9391 12.8943 2.89443 12.2499 2.25009C11.6056 1.60576 10.5609 1.60576 9.9166 2.25009L2.21293 9.95375C2.04132 10.1254 1.95552 10.2112 1.89029 10.3101C1.83242 10.3978 1.78668 10.493 1.7543 10.593C1.71781 10.7057 1.70441 10.8263 1.67761 11.0675L1.45825 13.0418Z" stroke="#FCFCFC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className={s.label}>Edit</span>
          </button>
          <div className={s.svgButton}>
            <button className={s.delete} onClick={() => setShowDeleteConfirm(true)}>Delete</button>
          </div>
        </div>
      </div>

      <div className={s.transactionCard}>
        <div className={s.mobileView}>
          <div className={s.mobileField}>
            <span className={s.fieldName}>Date</span>
            <span className={s.fieldValue}>{date}</span>
          </div>
          <div className={s.mobileField}>
            <span className={s.fieldName}>Type</span>
            <span className={s.fieldValue}>{type}</span>
          </div>
          <div className={s.mobileField}>
            <span className={s.fieldName}>Category</span>
            <span className={s.fieldValue}>{category}</span>
          </div>
          <div className={s.mobileField}>
            <span className={s.fieldName}>Comment</span>
            <span className={s.fieldValue}>{comment}</span>
          </div>
          <div className={s.mobileField}>
            <span className={s.fieldName}>Sum</span>
            <span className={`${s.fieldValue} ${type === "+" ? s.sumPositive : s.sumNegative}`}>
              {sum.toLocaleString()}
            </span>
          </div>
          <div className={s.actions}>
            <div className={s.svgButton}>
              <svg className={s.svgDelete} width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4999 6.33343L8.1666 4.0001M1.45825 13.0418L3.43247 12.8224C3.67367 12.7956 3.79427 12.7822 3.907 12.7457C4.007 12.7133 4.10218 12.6676 4.18994 12.6097C4.28885 12.5445 4.37465 12.4587 4.54626 12.2871L12.2499 4.58343C12.8943 3.9391 12.8943 2.89443 12.2499 2.25009C11.6056 1.60576 10.5609 1.60576 9.9166 2.25009L2.21293 9.95375C2.04132 10.1254 1.95552 10.2112 1.89029 10.3101C1.83242 10.3978 1.78668 10.493 1.7543 10.593C1.71781 10.7057 1.70441 10.8263 1.67761 11.0675L1.45825 13.0418Z" stroke="#FCFCFC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <button className={s.delete} onClick={() => setShowDeleteConfirm(true)}>Delete</button>
            </div>
            <button className={s.edit} onClick={() => setShowEdit(true)}>
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4999 6.33343L8.1666 4.0001M1.45825 13.0418L3.43247 12.8224C3.67367 12.7956 3.79427 12.7822 3.907 12.7457C4.007 12.7133 4.10218 12.6676 4.18994 12.6097C4.28885 12.5445 4.37465 12.4587 4.54626 12.2871L12.2499 4.58343C12.8943 3.9391 12.8943 2.89443 12.2499 2.25009C11.6056 1.60576 10.5609 1.60576 9.9166 2.25009L2.21293 9.95375C2.04132 10.1254 1.95552 10.2112 1.89029 10.3101C1.83242 10.3978 1.78668 10.493 1.7543 10.593C1.71781 10.7057 1.70441 10.8263 1.67761 11.0675L1.45825 13.0418Z" stroke="#FCFCFC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className={s.label}>Edit</span>
            </button>
          </div>
        </div>
      </div>


      {showDeleteConfirm && (
        <div className={s.confirmDialog}>
          <p>Are you sure you want to Delete?</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => setShowDeleteConfirm(false)}>Cancel</button>
        </div>
      )
      }

      {
        showEdit && (
          <ModalEditTransaction
            transaction={transaction}
            onClose={() => setShowEdit(false)}
          />
        )
      }
    </div>
  );
};

export default TransactionsItem;





