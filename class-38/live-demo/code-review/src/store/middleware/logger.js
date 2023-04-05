// why am I doing this?  log the action in the console as a precursor to thunk(aka hitting an API)
// goal:  use middleware in a way that redux likes
// note: redux is function heavy.  it favors currying information using multiple functions

const logger = (store) => (next) => (action) => {
  // here I can do a thing!
  console.log('__action__', action);
  next(action);
};

export default logger;
