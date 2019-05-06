import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './components/react-tabs-style.css';

import AddressAgreement from './components/AddressAgreement.js';
import DocsSeller from './components/DocsSeller.js';
import GeneralAgreementInfo from './components/GeneralAgreementInfo.js';
import PriceObject from './components/PriceObject.js';
import Statement from './components/Statement';
import Seller from './components/Seller';
import Buyer from './components/Buyer';
import Show from './components/Show';

import Scheduel from './components/scheduel/scheduel.js';

class App extends Component {
    componentWillMount(){
      document.body.style.margin = 0;
    }

    componentWillUnmount(){
      document.body.style.backgroundColor = null;
    }

  render() {
    return (
        <Tabs defaultIndex={0}>
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
                <Seller />
                <Buyer />
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
    );
  }
}

export default (App);