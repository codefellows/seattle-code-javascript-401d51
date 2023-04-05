import axios from 'axios';

const initialState = [];

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET-TODOS':
      return payload;
    default:
      return state;
  }
};

// action 
export const setTodos = (data) => {
  return {
    type: 'GET-TODOS',
    payload: data,
  }
}

// we need our data getter
export const getTodos = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');
  console.log('request results', response.data.results);
  dispatch(setTodos(response.data.results));
}

export default todoReducer;
