import React, { Component } from 'react';
import Setup from './components/Setup';
import Show from './components/Show';
import './App.css';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import  * as setupeActions from './actions/SetupeActions'



class App extends Component {    
  render() {
    const { headerOrder, parties } = this.props
    const { setTypeOrder, setObject} = this.props.setupeActions


  	return (
      <div className="App">
        <Setup 
        setTypeOrder={setTypeOrder} 
        setObject={setObject} 
        orderType = {headerOrder.orderType}
        orderObject={headerOrder.orderObject}

        />  
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

function mapStateToProps (state) {
  return {
    headerOrder: state.headerOrder,
    parties: state.parties

  }
}

function mapDispatchToProps(dispatch) {
  return {
    setupeActions: bindActionCreators(setupeActions, dispatch)
  }
 } 
export default connect(mapStateToProps, mapDispatchToProps)(App)