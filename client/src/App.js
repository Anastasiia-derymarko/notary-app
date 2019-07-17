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
import { Query} from 'react-apollo';
import { GET_CONTRACT } from './api/query';

import TestComponent from './components/TestComponent'

class App extends Component {
    componentWillMount(){
      document.body.style.margin = 0;
    }

    componentWillUnmount(){
      document.body.style.backgroundColor = null;
    }

  render() {
    return (
        <Query query={ GET_CONTRACT } variables={{id:1}}>
            {({ data, loading, error }) => {
                if (loading) return <p>loading</p>;
                if (error) return <p>ERROR</p>;
                return (
                    <Tabs defaultIndex={3}>
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
                            <GeneralAgreementInfo contract={data.contract}/>
                        </TabPanel>
                        <TabPanel>
                            <SellerAndBuyer contract={data.contract.participant}/>
                        </TabPanel>
                        <TabPanel>
                            <DocsSeller contract={data.contract.document}/>
                        </TabPanel>
                        <TabPanel>
                            <Statement contract={data.contract}/>
                        </TabPanel>
                        <TabPanel>
                            <AgreementToPrint />
                        </TabPanel>
                        <TabPanel>
                            <Scheduel />
                        </TabPanel>
                        <TabPanel>
                            <TestComponent />
                        </TabPanel>
                    </Tabs>
                )
            }}
        </Query>
    );
  }
}

export default (App);