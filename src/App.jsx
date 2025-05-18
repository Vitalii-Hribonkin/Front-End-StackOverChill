import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { lazy, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';

// Сторінки
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import UserAcountLayout from './components/UserAcountLayout';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/authOperations';


const HomeTab = lazy(() => import('./pages/HomeTab/HomeTab'));
const StatisticsTab = lazy(() => import('./pages/StatisticsTab/StatisticsTab'));
const CurrencyTab = lazy(() => import('./pages/CurrencyTab/CurrencyTab'));

const App = () => {
  const dispatch = useDispatch();
  const isTab = useMediaQuery({
    query: '(min-width: 768px)',
  });

  useEffect(() => {
    dispatch(refreshUser());
  }, []);

  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute component={UserAcountLayout} redirectTo='/login' />
          }
        >
          <Route index element={<HomeTab />} />
          <Route path='statistics' element={<StatisticsTab />} />
          {!isTab && <Route path='currency' element={<CurrencyTab />} />}
        </Route>
        <Route
          path='/register'
          element={
            <RestrictedRoute component={RegistrationPage} redirectTo='/' />
          }
        />
        <Route
          path='/login'
          element={<RestrictedRoute component={LoginPage} redirectTo='/' />}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
