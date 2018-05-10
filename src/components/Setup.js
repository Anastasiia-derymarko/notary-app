import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { orderTypes, orderObjects } from '../data/orders.js';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Parties from '../components/Parties.js';
 
class Setup extends Component {
  constructor (props) {
    super(props);

    this.state = {
      orderType: null,
      orderObject: null,
      orderDate: moment(),
    
    };
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps);
    console.log(this.state);
  }

  handleOrderTypeChange = selectedOption => {
    this.setState({ orderType: selectedOption ? selectedOption.value : null });
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
    const {orderType, orderObject, orderDate} = this.state;

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

export default Setup;
