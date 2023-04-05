import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// must import to use with hooks
import { incrementVote, decrementVote } from '../store/actions';

const Candidates = () => {

  const { candidates, totalVotes } = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log({totalVotes});
  // console.log({candidates});

  const handleChange = (candidate) => {
    dispatch(incrementVote(candidate));
  }

  return (
    <>
      <h1>Total Candidate Votes {totalVotes}</h1>
      {
        candidates.map((candidate, idx) => (
          <article key={`candidates-${idx}`}>
            <h5>{candidate.name} has {candidate.votes} vote(s)</h5>
            <Button 
              color="success"
              variant="contained"
              // first dispatch example - see handleChange
              onClick={() => handleChange(candidate)}
            >Vote</Button>
            <Button
            color="error"
              variant="contained"
              // second dispatch example
              onClick={() => dispatch(decrementVote(candidate))}
            >UnVote</Button>
          </article>
        ))
      }
    </>
  )
};

export default Candidates;
