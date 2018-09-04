import React, { Component } from 'react';
import Setup from './components/Setup';
import Show from './components/Show';

class App extends Component {    
  render() {
    return (
      <div>
        <Setup />  
        <Show  />
      </div>
    );
  }
}

export default (App);