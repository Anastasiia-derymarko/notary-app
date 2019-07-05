import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMainParameters } from '../store/actions/SetupeActions';
import PriceObject from './PriceObject.js';
import AddressAgreement from './AddressAgreement.js';
import {Column, Wrapper} from '../styleComponents/styleComponents';

import { Query} from 'react-apollo';
import { GET_CONTRACT } from '../api/query';
import HeaderContract from '../components/HeaderContract';

class GeneralAgreementInfo extends Component {

    render (){
      return (
       <Wrapper>
           <Column>
               <Query query={ GET_CONTRACT } variables={{id:2}}>
                   {({ data, loading, error }) => {
                       if (loading) return <p>loading</p>;
                       if (error) return <p>ERROR</p>;

                       return (<HeaderContract initialValues={data.contract} />);
                   }}
               </Query>
               <PriceObject />
           </Column>
           <Column>
               <AddressAgreement />

             {/*<div className = "column">
              <label>
                <span>державне мито сплачується</span>
                <Select
                  options={orderObjects}
                />
                </label>
                <label>
                <span>державне пенсійне страхування сплачується</span>
                 <Select
                  options={orderObjects}
                />
                </label>
                <div>
                <span>предати ключі Покупцеві</span>
                <span className = "checkboxLeftSpan">
                  <input type="checkbox"/>
                  <span>в день підписання цього договору.</span>
                </span>
                </div>
              <div>
                <label>Оцінка</label>
                <input type="checkbox"/>
              </div>
              <div>
                <label>Запит в БТІ</label>
                <input type="checkbox"/>
              </div>
              <div>
                <label>Інформація про брокера</label>
                <textarea></textarea>
              </div>
            </div>*/}
         </Column>
       </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
    ...state.headerOrder,
});
export default connect(mapStateToProps, { setMainParameters })(GeneralAgreementInfo);
