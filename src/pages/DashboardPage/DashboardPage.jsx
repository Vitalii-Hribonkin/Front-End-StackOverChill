import React, { lazy } from 'react'
import UserAcountLayout from '../../components/UserAcountLayout'
import { Route, Routes } from 'react-router-dom';


const HomeTab = lazy(() => import('../HomeTab/HomeTab'));
const StatisticsTab = lazy(() => import('../StatisticsTab/StatisticsTab'));
const CurrencyTab = lazy(() => import('../CurrencyTab/CurrencyTab'));


const DashboardPage = () => {
    return (
      <UserAcountLayout>
        <Routes>
          <Route index element={<HomeTab />} />
          <Route path='statistics' element={<StatisticsTab />} />
          <Route path='currency' element={<CurrencyTab />} />
        </Routes>
      </UserAcountLayout>
    );
}

export default DashboardPage
