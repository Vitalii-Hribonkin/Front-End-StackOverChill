import React, { Suspense } from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

const UserAcountLayout = ({children}) => {
  return (
    <>
      <Header />
      <Sidebar />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
}

export default UserAcountLayout