import React, { lazy } from 'react'
import UserAcountLayout from '../../components/UserAcountLayout'
import { Route, Routes } from 'react-router-dom';
import TransactionsList from '../../components/transactions/TransactionsList/TransactionsList';

const HomeTab = lazy(() => import('../HomeTab/HomeTab'));
const StatisticsTab = lazy(() => import('../StatisticsTab/StatisticsTab'));
const CurrencyTab = lazy(() => import('../CurrencyTab/CurrencyTab'));


const DashboardPage = () => {

  const dummyTransactions = [
    {
      id: 1,
      date: '2023-10-20',
      type: '+',
      category: 'Salary',
      comment: 'October salary',
      sum: 5000,
    },
    {
      id: 2,
      date: '2023-10-21',
      type: '-',
      category: 'Groceries',
      comment: 'Weekly shopping',
      sum: 200,
    },
    {
      id: 3,
      date: '2023-10-22',
      type: '-',
      category: 'Transport',
      comment: 'Taxi ride',
      sum: 50,
    },
    {
      id: 4,
      date: '2023-10-23',
      type: '-',
      category: 'Entern',
      comment: 'Movie night',
      sum: 30,
    },
    {
      id: 5,
      date: '2023-10-24',
      type: '+',
      category: 'Freelance',
      comment: 'Project payment',
      sum: 1200,
    },
    {
      id: 6,
      date: '2023-10-25',
      type: '-',
      category: 'Utilities',
      comment: 'Electricity bill',
      sum: 100,
    },
    {
      id: 7,
      date: '2023-10-26',
      type: '-',
      category: 'Dining',
      comment: 'Restaurant dinner',
      sum: 75,
    },
    {
      id: 8,
      date: '2023-10-25',
      type: '-',
      category: 'Utilities',
      comment: 'Electricity bill',
      sum: 100,
    },
    {
      id: 9,
      date: '2023-10-26',
      type: '-',
      category: 'Dining',
      comment: 'Restaurant dinner',
      sum: 75,
    },
    {
      id: 10,
      date: '2023-10-25',
      type: '-',
      category: 'Utilities',
      comment: 'Electricity bill',
      sum: 100,
    },
    {
      id: 11,
      date: '2023-10-26',
      type: '-',
      category: 'Dining',
      comment: 'Restaurant dinner',
      sum: 75,
    },
  ];

  return (
    <UserAcountLayout>


      <TransactionsList transactions={dummyTransactions} />


      <Routes>
        <Route index element={<HomeTab />} />
        <Route path='statistics' element={<StatisticsTab />} />
        <Route path='currency' element={<CurrencyTab />} />
      </Routes>
    </UserAcountLayout>
  );
}

export default DashboardPage
