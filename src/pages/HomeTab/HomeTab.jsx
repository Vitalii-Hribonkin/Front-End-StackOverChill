import ButtonAddTransaction from "../../components/transactions/ButtonAddTransaction/ButtonAddTransaction"
import ModalAddTransaction from "../../components/transactions/ModalAddTransaction/ModalAddTransaction"
import TransactionsList from "../../components/transactions/TransactionsList/TransactionsList"


const HomeTab = () => {
  const transactions = [
    {
      id: '1',
      date: '2024-04-27',
      type: '+',
      category: 'Food',
      comment: 'Lunch',
      sum: 150,
    },
    {
      id: '2',
      date: '2024-04-26',
      type: '-',
      category: 'Transport',
      comment: 'Bus ticket',
      sum: 50,
    },
  ];
  return (
    <>
      <TransactionsList transactions={transactions} />
      <ButtonAddTransaction />


    </>
  )
}

export default HomeTab