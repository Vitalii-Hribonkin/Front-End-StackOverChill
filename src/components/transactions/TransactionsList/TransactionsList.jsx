import TransactionsItem from '../TransactionsItem/TransactionsItem';
import s from "./TransactionsList.module.css";

const TransactionsList = ({ transactions }) => {

  if (!transactions || transactions.length === 0) {
    return <p className={s.placeholderText}>You have no transactions.</p>;
  }

  return (
    <>
    <div className={s.cont}>
      <div className={s.header}>
        <span className={s.dateHeader}>Date</span>
        <span className={s.typeHeader}>Type</span>
        <span className={s.categoryHeader}>Category</span>
        <span className={s.commentHeader}>Comment</span>
        <span className={s.sumHeader}>Sum</span>
      </div>
      <div className={s.list}>
        {transactions.map((tx, index) => (
          <TransactionsItem
            key={tx._id} 
            transaction={tx}
            index={index}
          />
        ))}
      </div>
    </div>
      
    </>
  );
};

export default TransactionsList;
