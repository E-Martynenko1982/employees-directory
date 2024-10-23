import { configureStore, combineReducers } from '@reduxjs/toolkit';
import filterReducer from '../redux/filterSlice';
import searchReducer from './searchSlice';
import sortReducer from './sortSlice';
import modalReducer from '../redux/modalSlice';
import employeesReducer from './employeesSlice';
import connectionReducer from './connectionSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  filter: filterReducer,
  search: searchReducer,
  sort: sortReducer,
  modal: modalReducer,
  employees: employeesReducer,
  connection: connectionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

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
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
