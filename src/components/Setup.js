import React, { Component } from 'react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { orderTypes, orderObjects } from '../data/orders.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../components/style/setup.css';
import Parties from '../components/Parties.js';
import AddressAgreement from '../components/AddressAgreement.js';
import { connect } from 'react-redux';
import { setTypeOrder, setObject, setDate, 
setNameSeller, setRegistrationNumber, setMorW, 
setAddressSeller,setNameBuyer,setRegistrationNumberBuyer,setMorWBuyer,setAddressBuyer } from '../actions/SetupeActions';

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
      addressSeller:this.props.addressSeller,
      nameBuyer:  this.props.nameBuyer,
      registrationNumberBuyer:this.props.registrationNumberBuyer,
      chooseMorWBuyer: this.props.chooseMorWBuyer,
      addressBuyer:this.props.addressBuyer
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
// Seller
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
// Buyer
  handleNameChangeBuyer = (event) => {
    this.setState({nameBuyer: event.target.value});
    this.props.setNameBuyer(event.target.value)
  }

  ChangeRegistrationNumberBuyer = (event) => {
    this.setState({registrationNumberBuyer: event.target.value});
    this.props.setRegistrationNumberBuyer(event.target.value.replace(/\D/,''));   
  }

  handleChooseMorWChangeBuyer = (radioGroup) => {
    this.setState({ chooseMorWBuyer: radioGroup });
    this.props.setMorWBuyer(radioGroup);
  }

  ChangeAddressBuyer = (event) => {
     this.setState({addressBuyer: event.target.value});
     this.props.setAddressBuyer(event.target.value);
  }

 render() {

    const {orderType, orderObject, orderDate, 
      nameSeller, registrationNumberSeller, chooseMorWSeller, addressSeller,
      nameBuyer, registrationNumberBuyer, chooseMorWBuyer, addressBuyer} = this.props

    return (
      <div>
        <div className="row">
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
          <div className="Additional_information">
            <label>Оцінка</label> 
            <input type="checkbox"/> 
          </div>
          <div className="Additional_information">
            <label>Запит в БТІ</label> 
            <input type="checkbox"/> 
          </div>
          <div className = "broker_info">
            <label>Інформація про брокера</label> 
            <textarea></textarea> 
          </div>
        </div>
        <div className = "row">     
          <Parties 
            name={nameSeller} 
            handleNameChange={this.handleNameChangeSeller}
            registrationNumber={registrationNumberSeller} 
            ChangeRegistrationNumber={this.ChangeRegistrationNumberSeller}
            chooseMorW = {chooseMorWSeller}
            handleChooseMorWChange={this.handleChooseMorWChange}
            address={addressSeller}
            ChangeAddress={this.ChangeAddress}
            NameParties = "Продавець"
          />
          <Parties 
            name={nameBuyer} 
            handleNameChange={this.handleNameChangeBuyer}
            registrationNumber={registrationNumberBuyer} 
            ChangeRegistrationNumber={this.ChangeRegistrationNumberBuyer}
            chooseMorW = {chooseMorWBuyer}
            handleChooseMorWChange={this.handleChooseMorWChangeBuyer}
            address={addressBuyer}
            ChangeAddress={this.ChangeAddressBuyer}
            NameParties = "Покупець"
          />
          </div>
          <div>
            <AddressAgreement />  
          </div>
        
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
  nameBuyer:PropTypes.string.isRequired,
  setRegistrationNumberBuyer:PropTypes.func.isRequired,
  registrationNumberBuyer:PropTypes.string.isRequired,
  setMorWBuyer:PropTypes.func.isRequired,
  chooseMorWBuyer:PropTypes.string.isRequired,
  addressBuyer:PropTypes.string.isRequired,
  setAddressBuyer:PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    ...state.headerOrder,
    ...state.parties,
});

export default connect(mapStateToProps, {setTypeOrder, setObject, setDate, 
  setNameSeller, setRegistrationNumber,setMorW,setAddressSeller,
  setNameBuyer, setRegistrationNumberBuyer,setMorWBuyer,setAddressBuyer})(Setup);