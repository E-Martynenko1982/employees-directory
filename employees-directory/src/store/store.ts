import { configureStore, combineReducers } from '@reduxjs/toolkit';
import filterReducer from '../features/Navigation/components/Filter/filterSlice';
import searchReducer from '../features/Navigation/components/Search/searchSlice';
import sortReducer from '../features/Navigation/components/Sort/sortSlice';
import modalReducer from '../features/Navigation/components/Modal/modalSlice';
import employeesReducer from '../features/EmployeesList/employeesSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Использует localStorage

const rootReducer = combineReducers({
  filter: filterReducer,
  search: searchReducer,
  sort: sortReducer,
  modal: modalReducer,
  employees: employeesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['filter', 'search', 'sort'], // Указываем, какие редьюсеры сохранять
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // Игнорируем действия 'persist/PERSIST' и 'persist/REHYDRATE'
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        // Игнорируем пути, где могут быть несериализуемые данные
        ignoredPaths: ['_persist'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
