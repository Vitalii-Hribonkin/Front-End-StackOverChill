import ButtonAddTransaction from "../../components/transactions/ButtonAddTransaction/ButtonAddTransaction"
import ModalAddTransaction from "../../components/transactions/ModalAddTransaction/ModalAddTransaction"
import TransactionsList from "../../components/transactions/TransactionsList/TransactionsList"


const HomeTab = () => {
  return (
    <>
          <TransactionsList />
          <ButtonAddTransaction />
          <ModalAddTransaction/>
          

    </>
  )
}

export default HomeTab