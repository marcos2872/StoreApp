import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'logged',
  initialState: {
    logged: false
  },

  reducers: {
    setIsLogged(state, { payload }) {  
      return {
        ...state,
        logged: payload,
      };
    },
  },
});

export const { setIsLogged } = slice.actions;

export default slice.reducer;