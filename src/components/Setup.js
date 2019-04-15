import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import '../components/style/setup.css';

import Parties from '../components/Parties.js';
import AddressAgreement from '../components/AddressAgreement.js';
import DocsSeller from '../components/DocsSeller.js';
import GeneralAgreementInfo from '../components/GeneralAgreementInfo.js';
import PriceObject from '../components/PriceObject.js';
import Statement from '../components/Statement';

import {setNameSeller, setRegistrationNumber, setMorW, 
setAddressSeller,setNameBuyer,setRegistrationNumberBuyer,setMorWBuyer,setAddressBuyer, setBuyer } from '../actions/SetupeActions';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Show from '../components/Show';

import Scheduel from '../components/scheduel/scheduel.js';

function parties (e, arr){
    let name = typeof(e) !== 'string' ? e.target.name+'Buyer' : 'chooseMorWBuyer';
    let value = typeof(e) !== 'string' ? e.target.value : e;

    if (name == 'registrationNumberBuyer'){
        value = value.replace(/\D/,'');
    }
    let buyer = {};

    for (let key in arr){
        if(key.indexOf('Buyer') !== -1){
            buyer[key] = arr[key];
        }

    }
    return [name,value,buyer]
}

class Setup extends Component {
  constructor (props) {
    super(props);

    let buyer = this.props.buyer;
    this.state = {
        nameSeller:  this.props.nameSeller,
        registrationNumberSeller:this.props.registrationNumberSeller,
        chooseMorWSeller: this.props.chooseMorWSeller,
        addressSeller:this.props.addressSeller,
        statementSeller:false,
        nameBuyer:  buyer.nameBuyer,
        registrationNumberBuyer:buyer.registrationNumberBuyer,
        chooseMorWBuyer: buyer.chooseMorWBuyer,
        addressBuyer:buyer.addressBuyer,
        statementBuyer:buyer.statementBuyer,
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
  };

  handleChooseMorWChangeBuyer = (radioGroup) => {
    this.setState({ chooseMorWBuyer: radioGroup });
    this.props.setMorWBuyer(radioGroup);
  };

  ChangeAddressBuyer = (event) => {
     this.setState({addressBuyer: event.target.value});
     this.props.setAddressBuyer(event.target.value);
  };

    handleChangeInputBuyer = e => {
        let buyer = parties(e, this.state);

        this.setState({[buyer[0]]:buyer[1]}, () => {this.props.setBuyer(buyer[2])});
    }

    handleChangeInputSeller = e => {
        let seller = parties(e, this.state);
        this.setState({[seller[0]]:seller[1]});
    }


 render() {
    const {
      nameSeller, registrationNumberSeller, chooseMorWSeller, addressSeller,
      nameBuyer, registrationNumberBuyer, chooseMorWBuyer, addressBuyer, statementSeller, statementBuyer} = this.state;

     return (
     <div className= "setup">
     <Tabs defaultIndex={1}>
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
        <div>
          <Parties
            name={nameSeller}
            handleNameChange={this.handleChangeInputSeller}
            registrationNumber={registrationNumberSeller}
            ChangeRegistrationNumber={this.handleChangeInputSeller}
            chooseMorW = {chooseMorWSeller}
            handleChooseMorWChanfunctionge={this.handleChangeInputSeller}
            address={addressSeller}
            ChangeAddress={this.handleChangeInputSeller}
            NameParties = "Продавець"
          />
            <div>
                Заява-згода
                <input
                    type="checkbox"
                    name="statementSeller"
                    onChange={this.handleChangeInputSeller}
                    value = {statementSeller}
                />
            </div>
          <Parties
            name={nameBuyer}
            handleNameChange={this.handleChangeInputBuyer}
            registrationNumber={registrationNumberBuyer}
            ChangeRegistrationNumber={this.handleChangeInputBuyer}
            chooseMorW = {chooseMorWBuyer}
            handleChooseMorWChange={this.handleChangeInputBuyer}
            address={addressBuyer}
            ChangeAddress={this.handleChangeInputBuyer}
            NameParties = "Покупець"
          />
            <div>
                Заява-згода
                <input
                    type="checkbox"
                    name="statement"
                    onChange={this.handleChangeInputBuyer}
                    value = {statementBuyer}
                />
            </div>
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
              <Statement />
          </TabPanel>

          <TabPanel>
            <Show/>
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
    footage: PropTypes.object.isRequired,

    buyer:PropTypes.object.isRequired,
    setBuyer: PropTypes.func.isRequired,

};

const mapStateToProps = state => ({
    ...state.headerOrder,
    ...state.parties,
    ...state.addressObject,
});

export default connect(mapStateToProps, {setNameSeller, setRegistrationNumber,setMorW,setAddressSeller,
  setNameBuyer, setRegistrationNumberBuyer,setMorWBuyer,setAddressBuyer, setBuyer})(Setup);