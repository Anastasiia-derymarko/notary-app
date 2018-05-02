import React, { Component } from 'react';
import Select from 'react-select';
import { orderTypes, orderObjects } from '../data/orders.js'

class Setup extends Component {
  constructor (props) {
    super(props);

    this.state = {
      orderType: null,
      orderObject: null,
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

  render() {
    const {orderType, orderObject} = this.state;

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
      </div>
    );
  }
}

export default Setup;
