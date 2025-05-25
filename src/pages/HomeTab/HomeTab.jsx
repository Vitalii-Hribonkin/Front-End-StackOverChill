import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import ButtonAddTransaction from "../../components/transactions/ButtonAddTransaction/ButtonAddTransaction";
import ModalAddTransaction from "../../components/transactions/ModalAddTransaction/ModalAddTransaction";
import TransactionsList from "../../components/transactions/TransactionsList/TransactionsList";
import Loader from "../../components/Loader/Loader";

import { selectTransactions } from "../../redux/transactions/transactionsSelectors";
import { selectCategories } from "../../redux/categories/categoriesSelectors";
import { fetchTransactions } from "../../redux/transactions/transactionsOperations";
import { fetchCategories } from "../../redux/categories/categoriesOperations";

const HomeTab = () => {
  const dispatch = useDispatch();

  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);

  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <TransactionsList transactions={transactions} categories={categories} />

      <ButtonAddTransaction onClick={handleOpenModal} />

      {isModalOpen && <ModalAddTransaction onClose={handleCloseModal} />}
    </>
  );
};

export default HomeTab;
