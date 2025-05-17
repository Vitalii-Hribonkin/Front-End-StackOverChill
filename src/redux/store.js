import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage

// Імпорт редʼюсерів
import authReducer from './auth/authSlice';
import userReducer from './user/userSlice';
import transactionsReducer from './transactions/transactionsSlice';
import statisticsReducer from './statistics/statisticsSlice';
import currencyReducer from './currency/currencySlice';

// Налаштування persist тільки для auth (з токеном)
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'], // зберігати тільки токен
};

const currencyPersistConfig = {
  key: 'currency',
  storage,
  whitelist: ['data', 'time'], 
};
// Обʼєднання всіх редʼюсерів
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  user: userReducer,
  transactions: transactionsReducer,
  statistics: statisticsReducer,
  currency: persistReducer(currencyPersistConfig, currencyReducer),
});

// Створення store
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    devTools: import.meta.env.DEV,
  });

// Ініціалізація persistor
export const persistor = persistStore(store);
