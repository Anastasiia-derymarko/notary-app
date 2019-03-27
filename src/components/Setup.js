import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import '../components/style/setup.css';

import Parties from '../components/Parties.js';
import AddressAgreement from '../components/AddressAgreement.js';
import DocsSeller from '../components/DocsSeller.js';
import GeneralAgreementInfo from '../components/GeneralAgreementInfo.js'
import PriceObject from '../components/PriceObject.js'

import {setNameSeller, setRegistrationNumber, setMorW, 
setAddressSeller,setNameBuyer,setRegistrationNumberBuyer,setMorWBuyer,setAddressBuyer } from '../actions/SetupeActions';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Show from '../components/Show';

import Scheduel from '../components/scheduel/scheduel.js';

class Setup extends Component {
  constructor (props) {
    super(props);

    this.state = {
      nameSeller:  this.props.nameSeller,
      registrationNumberSeller:this.props.registrationNumberSeller,
      chooseMorWSeller: this.props.chooseMorWSeller,
      addressSeller:this.props.addressSeller,
      nameBuyer:  this.props.nameBuyer,
      registrationNumberBuyer:this.props.registrationNumberBuyer,
      chooseMorWBuyer: this.props.chooseMorWBuyer,
      addressBuyer:this.props.addressBuyer,
    };
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
  };

 render() {
    const {
      nameSeller, registrationNumberSeller, chooseMorWSeller, addressSeller,
      nameBuyer, registrationNumberBuyer, chooseMorWBuyer, addressBuyer} = this.props;

    console.log(this.props.footage);
     return (
     <div className= "setup"> 
     <Tabs defaultIndex={6}>
      <TabList>
        <Tab>Загальна інформація</Tab>
        <Tab>Сторони</Tab>
        <Tab>Об'єкт нерухомого майна</Tab>
        <Tab>Супровідні документи</Tab>
        <Tab>Ціна</Tab>
        <Tab>Заяви-згоди</Tab>
        <Tab>Договір</Tab>
        <Tab>Календар</Tab>
      </TabList>
      <TabPanel>
       <GeneralAgreementInfo />
        </TabPanel>
        <TabPanel>
        <div className = "row" style = {this.state.displayNoneParties}>     
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
          </TabPanel>

          <TabPanel>
            <AddressAgreement />  
          </TabPanel>

          <TabPanel>
            <DocsSeller />  
          </TabPanel>

          <TabPanel>
            <PriceObject />
          </TabPanel>  

          <TabPanel>
            <div className = "row"><span>Заяви-згоди</span></div>
          </TabPanel>  

          <TabPanel>
            <Show  />
          </TabPanel>  
          <TabPanel>
            <Scheduel />
          </TabPanel>
         </Tabs>
        </div> 
    );
  }
}


Setup.propTypes = {
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
    footage: PropTypes.object.isRequired

};

const mapStateToProps = state => ({
    ...state.headerOrder,
    ...state.parties,
    ...state.addressObject,
});

export default connect(mapStateToProps, {setNameSeller, setRegistrationNumber,setMorW,setAddressSeller,
  setNameBuyer, setRegistrationNumberBuyer,setMorWBuyer,setAddressBuyer})(Setup);