import React, { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import { createStyles, Grid } from '@mantine/core';
import { v4 as uuid } from 'uuid';
import { SettingsContext } from '../../Context/Settings';
import List from '../List';

const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  }
}));

const Todo = () => {
  const { classes } = useStyles();
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  return (
    <>
      <h1 data-testid="todo-h1" className={classes.h1}>To Do List: {incomplete} items pending</h1>
      <Grid style={{width: '80%', margin: 'auto'}}>
        <Grid.Col xs={12} sm={4}>
          <form onSubmit={handleSubmit}>

            <h2>Add To Do Item</h2>

            <label>
              <span>To Do Item</span>
              <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
            </label>

            <label>
              <span>Assigned To</span>
              <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
            </label>

            <label>
              <span>Difficulty</span>
              <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
            </label>

            <label>
              <button type="submit">Add Item</button>
            </label>
          </form>
        </Grid.Col>

        <Grid.Col xs={12} sm={8}>
          <List list={list} toggleComplete={toggleComplete} />
        </Grid.Col>

      </Grid>
    </>
  );
};

export default Todo;
