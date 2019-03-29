import React, { Component } from 'react';
import Chat from "./Chat";
import Header from "./Header";

class App extends Component {
  render() {
    return (

      <div>
        <Header/>
           <Chat/>
      </div>
    );
  }
}

export default App;
