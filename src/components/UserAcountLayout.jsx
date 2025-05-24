import React, { Suspense, useEffect } from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/user/userOperations';
import { selectIsRefreshing } from '../redux/auth/authSelectors';

const UserAcountLayout = ({ children }) => {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
   !isRefreshing && dispatch(getUser())
  }, [dispatch, isRefreshing])

  return (
    <>
      <Header />
      <div className='container'>
        <Sidebar />
        <Suspense fallback={null}>
          {
            <>
              {children}
              <Outlet />
            </>
          }
        </Suspense>
      </div>
    </>
  );
}

export default UserAcountLayout