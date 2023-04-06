import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// must import to use with hooks
import { incrementIndVotes, decrementIndVotes } from '../store/candidates';
import { incrementTotal, decrementTotal } from '../store/totalVotes';

const Candidates = () => {

  const { candidates, totalVotes } = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log({totalVotes});
  // console.log({candidates});

  const handleIncrement = (candidate) => {
    dispatch(incrementIndVotes(candidate));
    dispatch(incrementTotal(candidate));
  }

  const handleDecrement = (candidate) => {
    dispatch(decrementIndVotes(candidate));
    dispatch(decrementTotal(candidate));
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
              onClick={() => handleIncrement(candidate)}
            >Vote</Button>
            <Button
            color="error"
              variant="contained"
              // second dispatch example
              onClick={() => handleDecrement(candidate)}
            >UnVote</Button>
            <Button component={Link} to={`/candidate/${candidate._id}`}>Details</Button>
          </article>
        ))
      }
    </>
  )
};

export default Candidates;
