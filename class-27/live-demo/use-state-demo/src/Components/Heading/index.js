import './styles.scss';

const Heading = (props) => {

  const { name } = props;

  return (
    <>
      <h2>How are you {name}?</h2>
    </>
  )
};

export default Heading
