import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { useMediaQuery } from 'react-responsive';

import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';
import Loader from './components/Loader/Loader';

import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import UserAcountLayout from './components/UserAcountLayout/UserAcountLayout';

import { refreshUser } from './redux/auth/authOperations';
import { setLoading } from './redux/globalSlice';


const HomeTab = lazy(() => import('./pages/HomeTab/HomeTab'));
const StatisticsTab = lazy(() => import('./pages/StatisticsTab/StatisticsTab'));
const CurrencyTab = lazy(() => import('./pages/CurrencyTab/CurrencyTab'));

const App = () => {
  const dispatch = useDispatch();
  const isTab = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    const fetchUser = async () => {
      dispatch(setLoading(true));
      try {
        await dispatch(refreshUser()).unwrap();
      } catch (error) {
        console.error('Error refreshing user:', error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchUser();
  }, [dispatch]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Loader />
      <Routes>
        <Route
          path="/"
          element={<PrivateRoute component={UserAcountLayout} redirectTo="/login" />}
        >
          <Route index element={<HomeTab />} />
          <Route path="statistics" element={<StatisticsTab />} />
          {!isTab && <Route path="currency" element={<CurrencyTab />} />}
        </Route>
        <Route
          path="/register"
          element={<RestrictedRoute component={RegistrationPage} redirectTo="/" />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={LoginPage} redirectTo="/" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
