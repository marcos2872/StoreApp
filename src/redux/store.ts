import { configureStore } from '@reduxjs/toolkit';
import data from './reduces/data'
import logged from './reduces/userLogged'

const store = configureStore({
  reducer: {
    data,
    logged,
  },
});

export default store;
