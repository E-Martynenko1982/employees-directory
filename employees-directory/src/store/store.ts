import { configureStore, combineReducers } from '@reduxjs/toolkit';
import filterReducer from '../features/Navigation/components/Filter/filterSlice';
import searchReducer from '../features/Navigation/components/Search/searchSlice';
import sortReducer from '../features/Navigation/components/Sort/sortSlice';
import modalReducer from '../features/Navigation/components/Modal/modalSlice';
import employeesReducer from '../features/EmployeesList/employeesSlice';
import connectionReducer from '../features/Connection/connectionSlice'; // Новый слайс для состояния соединения

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Комбинирование всех редьюсеров, включая новый connectionReducer
const rootReducer = combineReducers({
  filter: filterReducer,
  search: searchReducer,
  sort: sortReducer,
  modal: modalReducer,
  employees: employeesReducer,
  connection: connectionReducer, // Добавляем новый слайс
});

// Конфигурация для сохранения состояния через redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['filter', 'search', 'sort'], // Состояние соединения можно не сохранять
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Конфигурация и создание store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        ignoredPaths: ['_persist'],
      },
    }),
});

// Создание persistor для поддержки сохранения состояния
export const persistor = persistStore(store);

// Типизация состояния и dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
