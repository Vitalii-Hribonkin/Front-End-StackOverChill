import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';

import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';

import Loader from './components/Loader/Loader'; 
import { setLoading } from './redux/globalSlice'; 

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true)); 
    const timer = setTimeout(() => {
      dispatch(setLoading(false)); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, [dispatch]);

  return (
    <>
      <Loader />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route
          path="/*"
          element={<PrivateRoute component={DashboardPage} redirectTo="/login" />}
        />
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
