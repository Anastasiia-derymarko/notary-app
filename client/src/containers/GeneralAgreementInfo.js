import React from 'react';
import PriceObject from './PriceObject.js';
import AddressAgreement from './AddressAgreement.js';
import {Column, Wrapper} from '../styleComponents/styleComponents';
import HeaderContract from '../components/HeaderContract';

export default function GeneralAgreementInfo({contract}){

      return (
           <Wrapper>
               <Column>
                   <HeaderContract contract={contract.mainParameters} />
                   <PriceObject contract={contract.price} />
               </Column>
               <Column>
                   <AddressAgreement contract={contract.addressAndFootage}/>
               </Column>
           </Wrapper>
      )
}