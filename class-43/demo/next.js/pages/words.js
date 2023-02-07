import {useState} from 'react';
import Chance from 'chance';

import React from 'react';
import Head from '../components/head';
import Nav from '../components/nav';

const Words = (props) => {

  let [words, setWords] = useState('randoming');
  let chance = new Chance();

  return (
    <>
      <Head title="Hacker words" />
      <Nav />
      <h2>{words}</h2>
      <button onClick={() => setWords( chance.name() )}>New Hacker</button>
    </>
  );

};

export default Words;
