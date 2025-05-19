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
  }, [dispatch]);

  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />
      <Routes>
        {/* Публічні маршрути для неавторизованих */}
        <Route element={<RestrictedRoute />}>
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Route>

        <Route path='*' element={<NotFoundPage />} />

        {/* Приватні маршрути */}
        <Route element={<PrivateRoute />}>
          <Route element={<UserAcountLayout />}>
            <Route index element={<HomeTab />} />
            <Route path='statistics' element={<StatisticsTab />} />
            {!isTab && <Route path='currency' element={<CurrencyTab />} />}
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
