import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'data',
  initialState: {
    data: []
  },

  reducers: {
    setData(state, { payload }) {  
      return {
        ...state,
        data: payload,
      };
    },
  },
});

export const { setData } = slice.actions;

export default slice.reducer;
