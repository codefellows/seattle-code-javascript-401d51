import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { Badge, Card, CloseButton, Group, Pagination, Text } from '@mantine/core';

const List = ({ list, toggleComplete, deleteItem }) => {
  const { displayCount, showComplete } = useContext(SettingsContext);
  const [activePage, setPage] = useState(1);

  // what do we need for pagination?
  // listToRender (things that are renderable)
  const listToRender = showComplete ? list : list.filter(item => !item.complete);
  const listStart = displayCount * (activePage - 1);
  const listEnd = listStart + displayCount;
  const pageCount = Math.ceil(listToRender.length / displayCount);
  console.log('pageCount', pageCount);
  // need a display list ( this is a list of "displayCount" items)
  const displayList = listToRender.slice(listStart, listEnd);

  return (
    <>
      {displayList.map(item => (
        <Card withBorder shadow="md" key={item.id} mb="sm">
          <Card.Section withBorder>
            <Group position="apart">
              <Group>
                <Badge
                  onClick={() => toggleComplete(item.id)}
                  color={item.complete ? 'red': 'green'}
                  variant="filled"
                  m="3px"
                >
                  {item.complete ? 'Complete' : 'Pending'}
                </Badge>
                <Text>{item.assignee}</Text>
              </Group>
              <CloseButton
                onClick={() => deleteItem(item.id)}
                title="Close Todo Item"
              />
            </Group>
          </Card.Section>
          <Text mt="sm">{item.text}</Text>
          <Text align="right">Difficulty: {item.difficulty}</Text>
        </Card>
        // <div key={item.id}>
        //   <p></p>
        //   <p><small>Assigned to: {item.assignee}</small></p>
        //   <p><small>Difficulty: {item.difficulty}</small></p>
        //   <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
        //   <hr />
        // </div>
      ))}

      <Pagination value={activePage} onChange={setPage} total={pageCount} />
    </>
  )
};

export default List;
