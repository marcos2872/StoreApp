import { configureStore } from '@reduxjs/toolkit';
import data from './reduces/data'

const store = configureStore({
  reducer: {
    data,
  },
});

export default store;
