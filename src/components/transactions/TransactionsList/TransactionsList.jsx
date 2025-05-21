
import { useState } from 'react';
import TransactionsItem from '../TransactionsItem/TransactionsItem'
import s from "./TransactionsList.module.css";

const TransactionsList = ({ transactions }) => {

  const [currentTransactions, setTransactions] = useState(transactions);
  const handleDeleteTransaction = (transactionId) => {
    setTransactions(prev => prev.filter(tx => tx.id !== transactionId));
  };

  if (!currentTransactions || currentTransactions.length === 0) {
    return <p className={s.placeholderText}>You have no transactions.</p>;
  }

  return (
    <div className={s.container}>
      <div className={s.header}>
        <span className={s.dateHeader}>Date</span>
        <span className={s.typeHeader}>Type</span>
        <span className={s.categoryHeader}>Category</span>
        <span className={s.commentHeader}>Comment</span>
        <span className={s.sumHeader}>Sum</span>
      </div>
      <div className={s.list}>
        {currentTransactions.map((tx, index) => (
          <TransactionsItem
            key={tx.id}
            transaction={tx}
            index={index}
            onDelete={handleDeleteTransaction} />
        ))}
      </div>
    </div>
  );
};

export default TransactionsList;