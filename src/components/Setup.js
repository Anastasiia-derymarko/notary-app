import React, { Component } from 'react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { orderTypes, orderObjects } from '../data/orders.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Parties from '../components/Parties.js';
import { connect } from 'react-redux';
import { setTypeOrder, setObject, setDate, setNameSeller } from '../actions/SetupeActions';

import moment from 'moment';
import PropTypes from 'prop-types';

class Setup extends Component {
  constructor (props) {
    super(props);

    this.state = {
      orderType: this.props.orderType,
      orderObject: this.props.orderObject,
      orderDate: this.props.orderDate,
      nameSeller:  this.props.nameSeller,
    };
  }

  handleOrderTypeChange = selectedOption => {
    this.setState({ orderType: selectedOption ? selectedOption.value : null });
    this.props.setTypeOrder(+selectedOption.value)

  }

  handleOrderObjectChange = selectedOption => {
    this.setState({ orderObject: selectedOption ? selectedOption.value : null });
    this.props.setObject(+selectedOption.value)  
  }

  handleOrderDateChange = date => {
    this.setState({ orderDate:date});   
    this.props.setDate(date)   
    
  }

  handleNameChangeSeller = (event) => {
    this.setState({nameSeller: event.target.value});
    this.props.setNameSeller(event.target.value)
  }
 render() {

    const {orderType, orderObject, orderDate, nameSeller,registrationNumberSeller} = this.props

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
          selected={moment(orderDate)}
          onChange={this.handleOrderDateChange}
        />     
        <Parties 
          value={nameSeller} 
          handleNameChange={this.handleNameChangeSeller}
          value={registrationNumberSeller} 
        />

      </div>
    );
  }
}


Setup.propTypes = {
  setTypeOrder: PropTypes.func.isRequired,
  setObject: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired,
  orderType:PropTypes.number.isRequired,
  orderObject:PropTypes.number.isRequired,
  orderDate:PropTypes.object.isRequired,
  setNameSeller:PropTypes.func.isRequired,
  nameSeller:PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    ...state.headerOrder,
    ...state.parties,
});

export default connect(mapStateToProps, {setTypeOrder, setObject, setDate, setNameSeller})(Setup);
