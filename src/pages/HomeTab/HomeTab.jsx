import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTransactions,
} from "../../redux/transactions/transactionsOperations";
import {
  selectTransactions,
  selectIsLoading,
  selectError,
} from "../../redux/transactions/transactionsSelectors";
import { fetchCategories } from "../../redux/categories/categoriesOperations";

import ButtonAddTransaction from "../../components/transactions/ButtonAddTransaction/ButtonAddTransaction";
import TransactionsList from "../../components/transactions/TransactionsList/TransactionsList";

const HomeTab = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <TransactionsList transactions={transactions} />
      <ButtonAddTransaction />
    </>
  );
};

export default HomeTab;
