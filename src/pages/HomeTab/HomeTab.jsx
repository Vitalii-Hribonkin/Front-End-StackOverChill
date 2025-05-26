import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTransactions,
} from "../../redux/transactions/transactionsOperations";
import {
  selectTransactions,
} from "../../redux/transactions/transactionsSelectors";


import ButtonAddTransaction from "../../components/transactions/ButtonAddTransaction/ButtonAddTransaction";
import TransactionsList from "../../components/transactions/TransactionsList/TransactionsList";

const HomeTab = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);


  useEffect(() => {
    dispatch(fetchTransactions());

  }, [dispatch]);

  return (
    <>
        <TransactionsList transactions={transactions} />
        <ButtonAddTransaction />
    </>
  );
};

export default HomeTab;
