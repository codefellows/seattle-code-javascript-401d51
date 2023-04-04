// actions
export const incrementVote = (candidate) => {
  return {
    type: 'INCREMENT',
    payload: candidate,
  }
};

export const decrementVote = (candidate) => {
  return {
    type: 'DECREMENT',
    payload: candidate,
  }
};

export const reset = () => {
  return {
    type: 'RESET',
    payload: {},
  }
}
