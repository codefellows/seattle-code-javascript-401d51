import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { Pagination } from '@mantine/core';

const List = ({ list, toggleComplete }) => {
  const { displayCount, showComplete, sort } = useContext(SettingsContext);
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
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}

      <Pagination value={activePage} onChange={setPage} total={pageCount} />
    </>
  )
};

export default List;
