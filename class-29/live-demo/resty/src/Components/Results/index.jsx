import React from 'react';
import JSONPretty from 'react-json-pretty';
var JSONPrettyMon = require('react-json-pretty/dist/monikai');

const Results = (props) => {
  return (
    <section>
      {
        props.loading
          ? <p>Loading...</p>
          : <pre data-testid="json">
            {
              props.data
                ? <JSONPretty data={props.data} theme={JSONPrettyMon}></JSONPretty>
                : null
            }
          </pre>
      }

    </section>
  );
}

export default Results;
