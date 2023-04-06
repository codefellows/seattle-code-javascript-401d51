import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const CandidateDetails =() => {
  const { candidates } = useSelector(state => state)
  const { id } = useParams();
  // console.log({id})

  const activeCandidate = candidates.find(candidate => candidate._id === id);
  // console.log(activeCandidate);
  return(
    <>
      <h4>active candidate is {activeCandidate.name}</h4>
    </>
  )
};

export default CandidateDetails;
