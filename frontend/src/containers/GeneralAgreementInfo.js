import React, { Component } from 'react';
import { orderTypes, orderObjects } from '../components/data/orders.js';
import Select from 'react-select';
import { connect } from 'react-redux';
import { setMainParameters } from '../store/actions/SetupeActions';
import PriceObject from './PriceObject.js';
import AddressAgreement from './AddressAgreement.js';
import {Label, Placeholder, styleSelectMenu, Column, Row, Input, colorOptions, Wrapper} from '../styleComponents/styleComponents';

class GeneralAgreementInfo extends Component {
    constructor (props) {
        super(props);

        const {orderType, orderObject, orderDate} = this.props.mainParametersContract;
        this.state = {
            orderType: orderType,
            orderObject: orderObject,
            orderDate: orderDate,
            inputType: 'text',
        }
    }
    handleOnInputChange = (valueSelect, nameSelect) => {
        let value, name;

        if(valueSelect === null){
            value = valueSelect;
            name = nameSelect.name;
        }else if ((typeof valueSelect['target'] !== "undefined")){
            value = valueSelect.target.value;
            name = valueSelect.target.name;
        }else {
            value = valueSelect;
            name = nameSelect.name;
        }
        this.setState({[name]: value}, ()=>{this.props.setMainParameters({[name]: value})});
    };
    onFocus = () => {
      this.setState({inputType: 'date'});
    };
    onBluer = () => {
        this.setState({inputType: 'text'});
    };
  render (){
      const {orderType, orderObject, orderDate, inputType} = this.state;
   return (
       <Wrapper>
           <Column>
            <Label>
                <Placeholder placeholderPosition={orderType != null ? orderType.value : null} >Тип угоди</Placeholder>
                <Select
                    name="orderType"
                    value={orderType}
                    onChange={this.handleOnInputChange}
                    options={orderTypes}
                    placeholder=""
                    isSearchable={false}
                    isClearable={true}
                    theme={colorOptions}
                    styles={styleSelectMenu}
                />
            </Label>
            <Row>
                <Label size='47%'>
                  <Placeholder placeholderPosition={orderObject != null ? orderObject.value : null} >Об'єкт угоди</Placeholder>
                    <Select
                        name="orderObject"
                        placeholder=""
                        value={orderObject}
                        onChange={this.handleOnInputChange}
                        options={orderObjects}
                        isClearable={true}
                        isSearchable={false}
                        theme={colorOptions}
                        styles={styleSelectMenu}
                    />
                </Label>
                <Label size='47%'>
                    <Placeholder placeholderPosition = {inputType === 'date' || orderDate !== '' ? '' : null} >Дата угоди</Placeholder>
                    <Input
                        name="orderDate"
                        type = {inputType}
                        value={orderDate}
                        onFocus={this.onFocus}
                        onBlur={this.onBluer}
                        onChange={this.handleOnInputChange}
                    />
                </Label>
            </Row>
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
