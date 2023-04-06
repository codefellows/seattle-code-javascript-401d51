import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTodos } from '../store/todo';

const Todo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      <h4>Todo component lives!</h4>
    </>
  )

};

export default Todo;
