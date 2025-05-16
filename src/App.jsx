import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';

// Сторінки
import HomeTab from './pages/HomeTab/HomeTab';
import StatisticsTab from './pages/StatisticsTab/StatisticsTab';
import CurrencyTab from './pages/CurrencyTab/CurrencyTab';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route
          path="/"
          element={<PrivateRoute component={HomeTab} redirectTo="/login" />}
        />
        <Route
          path="/statistics"
          element={<PrivateRoute component={StatisticsTab} redirectTo="/login" />}
        />
        <Route
          path="/currency"
          element={<PrivateRoute component={CurrencyTab} redirectTo="/login" />}
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
