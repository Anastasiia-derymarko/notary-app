import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './components/react-tabs-style.css';

import DocsSeller from './components/DocsSeller.js';
import GeneralAgreementInfo from './components/GeneralAgreementInfo.js';
import Statement from './components/Statement';
import SellerAndBuyer from './components/SellerAndBuyer';
import AgreementToPrint from './components/ArgeementToPrint';

import Scheduel from './components/scheduel/scheduel.js';
import './App.css';

class App extends Component {
    componentWillMount(){
      document.body.style.margin = 0;
    }

    componentWillUnmount(){
      document.body.style.backgroundColor = null;
    }

  render() {
    return (
        <Tabs defaultIndex={1}>
            <TabList>
                <Tab>Загальна інформація</Tab>
                <Tab>Сторони</Tab>
                <Tab>Супровідні документи</Tab>
                <Tab>Заяви-згоди</Tab>
                <Tab>Договір</Tab>
                <Tab>Календар</Tab>
            </TabList>
            <TabPanel>
                <GeneralAgreementInfo />
            </TabPanel>
            <TabPanel>
                <SellerAndBuyer />
            </TabPanel>
            <TabPanel>
                <DocsSeller />
            </TabPanel>
            <TabPanel>
                <Statement />
            </TabPanel>
            <TabPanel>
                <AgreementToPrint />
            </TabPanel>
            <TabPanel>
                <Scheduel />
            </TabPanel>
        </Tabs>
    );
  }
}

export default (App);