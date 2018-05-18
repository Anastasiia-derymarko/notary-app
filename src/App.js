import React, { Component } from 'react';
import Setup from './components/Setup';
import Show from './components/Show';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {    
  render() {
    const { headerOrder, parties } = this.props;

  	return (
      <div className="App">
        <Setup />  
        <Show  
        orderType = {headerOrder.orderType}
        orderObject={headerOrder.orderObject}
        orderDate={headerOrder.orderDate}
        name={parties.name}
        registrationNumber={parties.registrationNumber}
        address={parties.address}
        
        />


        
      </div>
    );
  }
}

const mapStateToProps = state => ({
    headerOrder: state.headerOrder,
    parties: state.parties
});

export default connect(mapStateToProps)(App);