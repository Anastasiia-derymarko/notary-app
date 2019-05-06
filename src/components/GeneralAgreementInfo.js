import React, { Component } from 'react';
import { orderTypes, orderObjects } from '../data/orders.js';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setMainParameters } from '../actions/SetupeActions';
import styled from 'styled-components';

class GeneralAgreementInfo extends Component {
    constructor (props) {
        super(props);

        const {orderType, orderObject, orderDate} = this.props.mainParametersContract;

        this.state = {
            orderType: orderType,
            orderObject: orderObject,
            orderDate: orderDate,
        }
    }
    handleOnInputChange = (valueSelect, nameSelect) => {
        // const check = valueSelect != null || (typeof valueSelect['target'] !== "undefined");
        // const value = check ? valueSelect.target.value : valueSelect;
        // const name = check ? valueSelect.target.name : nameSelect.name;

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

        this.setState({[name]: value}, ()=>{this.props.setMainParameters(this.state)});
    };
    colorOptions = (theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
            ...theme.colors,
            primary: '#b3b3b2',
            primary25:'#e6e6e6',
            primary50:'#e6e6e6',
        },
    });

  render (){
      const {orderType, orderObject, orderDate} = this.state;

   return (
         <div className="column">
          <StyleInput>
            <Placeholder placeholderPosition={orderType != null ? orderType.value : null} >Тип угоди</Placeholder>
            <Select
                name="orderType"
                placeholder=""
                value={orderType}
                isSearchable={false}
                onChange={this.handleOnInputChange}
                options={orderTypes}
                isClearable={true}
                theme={this.colorOptions}
            />
          </StyleInput>
          <StyleInput>
              <Placeholder placeholderPosition={orderObject != null ? orderObject.value : null} >Об'єкт угоди</Placeholder>
                <Select
                    name="orderObject"
                    placeholder=""
                    value={orderObject}
                    onChange={this.handleOnInputChange}
                    options={orderObjects}
                    isClearable={true}
                    isSearchable={false}
                    theme={this.colorOptions}
                />
          </StyleInput>
            <label>
            <span>Дата угоди:</span>
            <input
                name="orderDate"
              type = "date"
              value= "orderDate"
              onChange={this.handleOnInputChange}
            />
            </label>
            <div className = "column">
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
            </div>
          </div>
    )
  }
}

GeneralAgreementInfo.propTypes = {
    setMainParameters : PropTypes.func.isRequired,
    mainParametersContract:PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    ...state.headerOrder,
});
export default connect(mapStateToProps, { setMainParameters })(GeneralAgreementInfo);


const StyleInput = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 30px;
`;
const Placeholder = styled.div`
  position: absolute;
  top: 50%;
  transform: ${props => props.placeholderPosition === null ? 'translate(5px,-50%)' : 'translate(5px,-200%)'};
  z-index:2;
  transition: transform 0.3s ease;
  color:
`;
const Column = styled.div`
    width: 30%;
`;