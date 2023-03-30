import React from 'react';

// create context
export const ModeContext = React.createContext();

// create a provider
class ModeProvider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'light',
    };
  }

  // the ability to do some processing here if ever we want to CHANGE STATE.
  // WE COULD USE A REDUCER here

  render(){
    return(
      // establish context within said provider
      <ModeContext.Provider value={this.state}>
        {this.props.children}
      </ModeContext.Provider>
    )
  }
}

export default ModeProvider;
