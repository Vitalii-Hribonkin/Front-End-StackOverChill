import React, { Suspense } from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom';

const UserAcountLayout = ({ children }) => {

  return (
    <>
      <Header />
      <Sidebar />
      <Suspense fallback={null}>
        {
          <>
            {children}
            <Outlet />
          </>
        }
      </Suspense>
    </>
  );
}

export default UserAcountLayout