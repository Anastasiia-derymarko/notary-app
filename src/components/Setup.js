import React, { Component } from 'react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { orderTypes, orderObjects } from '../data/orders.js';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Parties from '../components/Parties.js';

import PropTypes from 'prop-types';


export default class Setup extends Component {
  constructor (props) {
    super(props);

    this.state = {
      orderType: this.props.orderType,
      orderObject: this.props.orderObject,
      orderDate: moment(),
    
    };
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps);
    
  }

  handleOrderTypeChange = selectedOption => {
    this.setState({ orderType: selectedOption ? selectedOption.value : null });
    this.props.setTypeOrder(+selectedOption.value)

  }

  handleOrderObjectChange = selectedOption => {
    this.setState({ orderObject: selectedOption ? selectedOption.value : null });
  }

  handleOrderDateChange = date => {
    this.setState({ orderDate: date });
    

  }
  handleChooseMorWChange = radioGroup =>{
   
  }

 render() {

    const {orderType, orderObject, orderDate} = this.props

    return (
      <div>
        <Select
          name="order_type"
          value={orderType}
          onChange={this.handleOrderTypeChange}
          options={orderTypes}
        />
        <Select
          name="order_object"
          value={orderObject}
          onChange={this.handleOrderObjectChange}
          options={orderObjects}
        />
        <DatePicker
        dateFormat="DD/MM/YYYY"
        selected={orderDate}
        onChange={this.handleOrderDateChange}
        />

      <input type="radio" value="W" onChange={this.handleChooseMorWChange}/>
      <span>W</span>
      <input type="radio" value="M" onChange={this.handleChooseMorWChange}/>
      <span>M</span>
      <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-between'}}>  
      <Parties />
      <Parties />
      </div>
      
      </div>
    );
  }

}


Setup.propTypes = {
  setTypeOrder: PropTypes.func.isRequired,
  orderType:PropTypes.number.isRequired,
  orderObject:PropTypes.number.isRequired,
  orderDate:PropTypes.string.isRequired
}