// store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import filterReducer from '../features/Navigation/components/Filter/filterSlice';
import searchReducer from '../features/Navigation/components/Search/searchSlice';
import sortReducer from '../features/Navigation/components/Sort/sortSlice';
import modalReducer from '../features/Navigation/components/Modal/modalSlice';
import employeesReducer from '../features/EmployeesList/employeesSlice';
import connectionReducer from '../features/Connection/connectionSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  filter: filterReducer,
  search: searchReducer,
  sort: sortReducer,
  modal: modalReducer,
  employees: employeesReducer,
  connection: connectionReducer, // Добавили connectionReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['filter', 'search', 'sort'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

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

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
