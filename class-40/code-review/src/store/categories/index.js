import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    activeCategory: ''
  },
  reducers: {
    setCategory: (state, action) => {
      state.categories = action.payload;
    },
    select: (state, action) => {
      state.activeCategory = action.payload;
    }
  }
})

export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');

  dispatch(setCategory(response.data.results))
}

export const { select, setCategory } = categorySlice.actions;
export default categorySlice.reducer;
