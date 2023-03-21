import React from 'react';

const Results = (props) => {
  return (
    <section>
      <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    </section>
  );
}

export default Results;
