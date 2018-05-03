import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { orderTypes, orderObjects } from '../data/orders.js';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class Setup extends Component {
  constructor (props) {
    super(props);

    this.state = {
      orderType: null,
      orderObject: null,
      startDate: moment(),
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

  handleChange = date=> {
    this.setState({ startDate: date });
  }
 
  render() {
    const {orderType, orderObject, startDate} = this.state;

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
        selected={startDate}
        onChange={this.handleChange}
        /> 
      </div>
    );
  }
}

export default Setup;
