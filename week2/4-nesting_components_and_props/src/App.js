import React from "react";
import Devs from './Devs';

class App extends React.Component {
  render() {
    return (
      <div>
        <Devs 
          name='Ben'
          hobby='Coding'
          skill='React'
        />
      </div>
    )
  }
}

export default App;
