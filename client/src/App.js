import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './components/react-tabs-style.css';

import DocsSeller from './containers/DocsSeller.js';
import GeneralAgreementInfo from './containers/GeneralAgreementInfo.js';
import Statement from './containers/Statement';
import SellerAndBuyer from './containers/SellerAndBuyer';
import AgreementToPrint from './components/ArgeementToPrint';

import Scheduel from './components/scheduel/scheduel.js';
import './App.css';
import {ButtonSave} from './styleComponents/styleComponents';

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
            <ButtonSave>зберегти</ButtonSave>
            <TabList>
                <Tab>Загальна інформація</Tab>
                <Tab>Сторони</Tab>
                <Tab>Супровідні документи</Tab>
                <Tab>Заяви-згоди</Tab>
                <Tab>Договір</Tab>
                <Tab>Календар</Tab>
                <Tab>Знайти</Tab>
            </TabList>
            <TabPanel>
                <GeneralAgreementInfo/>
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
            <TabPanel>
            </TabPanel>
        </Tabs>
    );
  }
}

export default (App);