import { Button } from '@mui/material';
import { connect } from 'react-redux';
import { incrementVote, decrementVote } from '../store/votes';

const Candidates = ({totalVotes, candidates, incrementVote, decrementVote}) => {
  // console.log({totalVotes});
  // console.log({candidates});
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
              onClick={() => incrementVote(candidate)}
            >Vote</Button>
            <Button
            color="error"
              variant="contained"
              onClick={() => decrementVote(candidate)}
            >UnVote</Button>
          </article>
        ))
      }
    </>
  )
};

// manage redux state and inject into props
// the object is our entire store, I can destructure votes
const mapStateToProps = ({ votes }) => {
  return {
    totalVotes: votes.totalVotes,
    candidates: votes.candidates,
  }
}

// inject the imported actions into the prop chain
const  mapDispatchToProps = {
  incrementVote,
  decrementVote,
}

export default connect(mapStateToProps, mapDispatchToProps)(Candidates);
