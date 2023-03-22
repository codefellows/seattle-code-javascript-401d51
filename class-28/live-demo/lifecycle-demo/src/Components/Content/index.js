import { useEffect } from 'react';

const Content = () => {

  //greedy at first.  (notice no array as an arg)
  // to achieve unmount functionality, use a return in the callback.
  // specifically we are going to RETURN a callback
  useEffect(() => {
    let intervalId = setInterval(() => {
      console.log('Content Mounted, and running...')
    }, 1000);

    // this is not necessary for lab, BUT turning things off is something I want you to know!!!
    return () => {
      console.log('Component Unmounted!!!  not running anymore!');
      clearInterval(intervalId);
    }

  });

  return (
    <>
      <h2>I am the component that is running some process!</h2>
    </>
  )
};

export default Content;
