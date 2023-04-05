const thunk = (store) => (next) => (actionOrFunction) => {
  typeof(actionOrFunction) === 'function'
  ? actionOrFunction(store.dispatch, store.getState)
  : next(actionOrFunction)
};

export default thunk;
