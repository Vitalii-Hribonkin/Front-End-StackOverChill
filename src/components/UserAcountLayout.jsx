// src/components/UserAcountLayout.jsx

import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Loader from './Loader/Loader';

const UserAcountLayout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex flex-1 overflow-hidden pt-[32px] pb-[32px] px-[27px]'>
        <Sidebar />
        <main className='flex-1 overflow-auto pl-[24px]'>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default UserAcountLayout;
