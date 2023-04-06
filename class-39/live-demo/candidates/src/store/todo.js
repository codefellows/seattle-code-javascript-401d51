import axios from 'axios';
import { createAction, createReducer } from '@reduxjs/toolkit';

/**
 * create constants used for TWO things
 * 1. actual actions
 * 2. use them as keys for my reducer
 */
const ADD_TODOS = 'ADD_TODOS';
const SET_TODOS = 'SET_TODOS';

// create actions
export const addTodos = createAction(ADD_TODOS);
export const setTodos = createAction(SET_TODOS);

// function to be used by thunk
// we need our data getter
export const getTodos = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');
  console.log('request results', response.data.results);
  dispatch(setTodos(response.data.results));
}

let todoList = [];
// create our reducer
const todoReducer = createReducer(
  // first object is initialState
    todoList,
  // second object: creates our individual reducers  properties
  {
    [ADD_TODOS]: (state, action) => {
      return  [...state.todoList, action.payload];
    },
    [SET_TODOS]: (state, action) => {
      return action.payload
    }
  },

)

export default todoReducer;
