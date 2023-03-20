const Content = (props) => {

  // props is an object, we can destructure and assign changeTitle to variable
  const { changeTitle } = props;

  return (
    <>
      <h4 data-testid="h4">Let's make changes!</h4>
      <button onClick={() => changeTitle('It Worked!')}>Change Title</button>
    </>
  )
}

export default Content;
