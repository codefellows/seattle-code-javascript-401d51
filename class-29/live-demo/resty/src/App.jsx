import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const App = () => {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);


  const callApi = (requestParams) => {
    // mock output
    // this will be hard to test
    // removing it once we hit an actual API will be a GOOD thing!
    // const data = {
    //   count: 2,
    //   results: [
    //     { name: 'fake thing 1', url: 'http://fakethings.com/1' },
    //     { name: 'fake thing 2', url: 'http://fakethings.com/2' },
    //   ],
    // };
    // setData(data);
    setRequestParams(requestParams);
  }

  useEffect(() => {
    // uns the API request with the new request options from state
    const getData = async () => {
      if(requestParams.method && requestParams.url){
        setLoading(true);
        const response = await axios(requestParams);
        const data = response.data;
        setData(data);
        setLoading(false);
      }
    }
    getData();
  }, [requestParams]);

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method ? requestParams.method.toUpperCase() : ''}</div>
      <div>URL: {requestParams.url}</div>
      <div>Data: {requestParams.data}</div>

      <Form handleApiCall={callApi} />
      <Results data={data} loading={loading} />
      <Footer />
    </>
  );
}

export default App;
