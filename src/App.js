import React, { Component } from 'react';
import Setup from './components/Setup';

class App extends Component {
    componentWillMount(){
      document.body.style.margin = 0;
    }

    componentWillUnmount(){
      document.body.style.backgroundColor = null;
    }

  render() {
    return (
      <div>
        <Setup />  
      </div>
    );
  }
}

export default (App);