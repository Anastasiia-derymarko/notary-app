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

import {setSeller, setBuyer } from '../actions/SetupeActions';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Show from '../components/Show';

import Scheduel from '../components/scheduel/scheduel.js';

function parties (e, arr, party){
    let name = typeof(e) !== 'string' ? e.target.name + party: 'chooseMorWBuyer';
    let value = typeof(e) !== 'string' ? e.target.value : e;

    if (name == 'registrationNumber' + party){
        value = value.replace(/\D/,'');
    }
    let buyer = {};

    for (let key in arr){
        if(key.indexOf(party) !== -1){
            buyer[key] = arr[key];
        }

    }
    return [name,value,buyer]
}

class Setup extends Component {
  constructor (props) {
    super(props);

      let buyer = this.props.buyer;
      let seller = this.props.seller;

    this.state = {
        nameSeller: seller.nameSeller,
        registrationNumberSeller: seller.registrationNumberSeller,
        chooseMorWSeller: seller.chooseMorWSeller,
        addressSeller: seller.addressSeller,
        statementSeller:seller.statementSeller,
        nameBuyer:  buyer.nameBuyer,
        registrationNumberBuyer:buyer.registrationNumberBuyer,
        chooseMorWBuyer: buyer.chooseMorWBuyer,
        addressBuyer:buyer.addressBuyer,
        statementBuyer:buyer.statementBuyer,
    };
  }

    handleChangeInputBuyer = e => {
        let buyer = parties(e, this.state, 'Buyer');
        this.setState({[buyer[0]]:buyer[1]}, () => {this.props.setBuyer(buyer[2])});
    };

    handleChangeInputSeller = e => {
        let seller = parties(e, this.state, 'Seller');
        this.setState({[seller[0]]:seller[1]}, () => {this.props.setSeller(seller[2])});
    };


 render() {
    const { nameSeller, registrationNumberSeller, chooseMorWSeller, addressSeller,
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
    footage: PropTypes.object.isRequired,
    seller:PropTypes.object.isRequired,
    setSeller:PropTypes.func.isRequired,
    buyer:PropTypes.object.isRequired,
    setBuyer: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    ...state.headerOrder,
    ...state.parties,
    ...state.addressObject,
});

export default connect(mapStateToProps, {setSeller,setBuyer})(Setup);