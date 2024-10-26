import { configureStore, combineReducers } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import sortReducer from './sortSlice';
import modalReducer from './modalSlice';
import employeesReducer from './employeesSlice';
import connectionReducer from './connectionSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  filter: filterReducer,
  sort: sortReducer,
  modal: modalReducer,
  employees: employeesReducer,
  connection: connectionReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['filter', 'sort'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
