import React, { Suspense, useEffect } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/user/userOperations';
import { selectIsRefreshing } from '../../redux/auth/authSelectors';
import clsx from 'clsx';
import {
  selectError,
  selectIsLoading,
} from '../../redux/transactions/transactionsSelectors';
import s from './UserAcountLayout.module.css';
import Loader from '../Loader/Loader';

const UserAcountLayout = ({ children }) => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    !isRefreshing && dispatch(getUser());
  }, [dispatch, isRefreshing]);

  return (
    <>
      <Header />
      <div className={clsx(s.layoutContainer, 'container')}>
        <Sidebar />
        <Suspense fallback={null}>
          {
            <div className={s.container}>
              {error && <p>Error: {error}</p>}
              {children}
              <Outlet />
            </div>
          }
        </Suspense>
      </div>
    </>
  );
};

export default UserAcountLayout;
