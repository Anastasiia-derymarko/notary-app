import React, { Component } from 'react';
import Setup from './components/Setup';
import Show from './components/Show';
import './App.css';

class App extends Component {    
  render() {
    return (
      <div className="App">
        <Setup />  
        <Show  />
      </div>
    );
  }
}

export default (App);