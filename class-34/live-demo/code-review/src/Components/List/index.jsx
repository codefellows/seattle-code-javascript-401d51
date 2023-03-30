import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { AuthContext } from '../../Context/Auth';
import { Badge, Card, CloseButton, Group, Pagination, Text } from '@mantine/core';
import { Else, If, Then } from 'react-if';
import Auth from '../Auth';

const List = ({ list, toggleComplete, deleteItem }) => {
  const { displayCount, showComplete } = useContext(SettingsContext);
  const { isLoggedIn, can } = useContext(AuthContext);
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
      {displayList.map((item, idx) => (
        <Card withBorder shadow="md" key={item.id} mb="sm">
          <Card.Section withBorder>
            <Group position="apart">
              <Group>
                <If condition={isLoggedIn && can('update')}>
                  <Then>
                    <Badge
                      onClick={() => toggleComplete(item.id)}
                      color={item.complete ? 'red' : 'green'}
                      variant="filled"
                      m="3px"
                    >
                      {item.complete ? 'Complete' : 'Pending'}
                    </Badge>
                  </Then>
                  <Else>
                    <Badge
                      color={item.complete ? 'red' : 'green'}
                      variant="filled"
                      m="3px"
                    >
                      {item.complete ? 'Complete' : 'Pending'}
                    </Badge>
                  </Else>
                </If>

                <Text data-testid={`item-assignee-${idx}`}>{item.assignee}</Text>
              </Group>
              <Auth capability="delete">
                <CloseButton
                  onClick={() => deleteItem(item.id)}
                  title="Close Todo Item"
                />
              </Auth>
            </Group>
          </Card.Section>
          <Text data-testid={`item-text-${idx}`} mt="sm">{item.text}</Text>
          <Text data-testid={`item-difficulty-${idx}`} align="right">Difficulty: {item.difficulty}</Text>
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
