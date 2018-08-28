import React, { Component } from 'react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { orderTypes, orderObjects } from '../data/orders.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Parties from '../components/Parties.js';
import { connect } from 'react-redux';
import { setTypeOrder, setObject, setDate, setNameSeller, setRegistrationNumber, setMorW, setAddressSeller } from '../actions/SetupeActions';

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
      registrationNumberSeller:this.props.registrationNumberSeller,
      chooseMorWSeller: this.props.chooseMorWSeller,
      addressSeller:this.props.addressSeller
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

  ChangeRegistrationNumberSeller = (event) => {
    this.setState({registrationNumberSeller: event.target.value});
    this.props.setRegistrationNumber(event.target.value.replace(/\D/,''));   
  }

  handleChooseMorWChange = (radioGroup) => {
    this.setState({ chooseMorWSeller: radioGroup });
    this.props.setMorW(radioGroup);
  }
  ChangeAddress = (event) => {
     this.setState({addressSeller: event.target.value});
     this.props.setAddressSeller(event.target.value);
  }

 render() {

    const {orderType, orderObject, orderDate, nameSeller, registrationNumberSeller, chooseMorWSeller, addressSeller} = this.props

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
          name={nameSeller} 
          handleNameChange={this.handleNameChangeSeller}
          registrationNumber={registrationNumberSeller} 
          ChangeRegistrationNumber={this.ChangeRegistrationNumberSeller}
          chooseMorW = {chooseMorWSeller}
          handleChooseMorWChange={this.handleChooseMorWChange}
          address={addressSeller}
          ChangeAddress={this.ChangeAddress}
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
  setRegistrationNumber:PropTypes.func.isRequired,
  registrationNumberSeller:PropTypes.string.isRequired,
  setMorW:PropTypes.func.isRequired,
  chooseMorWSeller:PropTypes.string.isRequired,
  addressSeller:PropTypes.string.isRequired,
  setAddressSeller:PropTypes.func.isRequired,
  
};

const mapStateToProps = state => ({
    ...state.headerOrder,
    ...state.parties,
});

export default connect(mapStateToProps, {setTypeOrder, setObject, setDate, setNameSeller, setRegistrationNumber,setMorW,setAddressSeller})(Setup);
