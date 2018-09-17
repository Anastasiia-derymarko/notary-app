import React, { Component } from 'react';

import { orderTypes, orderObjects } from '../data/orders.js';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setTypeOrder, setObject, setDate } from '../actions/SetupeActions';

import '../components/style/GeneralAgreementInfo.css';

class GeneralAgreementInfo extends Component {
  constructor (props) {
    super(props);

    this.state = {
      orderType: this.props.orderType,
      orderObject: this.props.orderObject,
      orderDate: this.props.orderDate,
    };
  }

  handleOrderTypeChange = selectedOption => {
    this.setState({ orderType: selectedOption ? selectedOption.value : null });
    this.props.setTypeOrder(selectedOption ? +selectedOption.value : null)
  }

  handleOrderObjectChange = selectedOption => {
    this.setState({ orderObject: selectedOption ? selectedOption.value : null });
    this.props.setObject(selectedOption ? +selectedOption.value : null)  
  }

  handleOrderDateChange = date => {
    console.log(date.target.value);    
    
  }

  render (){
      const {orderType, orderObject, orderDate} = this.state
   return (
        <div className = "row">
        <button className = "exemplify">Приклад</button>
         <div className="column">
          <label>
            <span>Тип угоди:</span>
            <Select
              name="order_type"
              value={orderType}
              onChange={this.handleOrderTypeChange}
              options={orderTypes}
            />
          </label>
          <label>
            <span>Об'єкт угоди:</span>  
            <Select
              name="order_object"
              value={orderObject}
              onChange={this.handleOrderObjectChange}
              options={orderObjects}
            />
            </label>
            <label>
            <span>Дата угоди:</span>  
            <input 
              className = "date"
              type = "date"
              onChange={this.handleOrderDateChange}
            />
            </label>
            
            </div>
            <div className = "column">
              <label>
                <span>державне мито сплачується</span>  
                <Select
                  name="order_object"
                  value={orderObject}
                  onChange={this.handleOrderObjectChange}
                  options={orderObjects}
                />
                </label>
                <label>
                <span>державне пенсійне страхування сплачується</span>
                 <Select
                  name="order_object"
                  value={orderObject}
                  onChange={this.handleOrderObjectChange}
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
  setTypeOrder: PropTypes.func.isRequired,
  setObject: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired,
  orderType:PropTypes.number.isRequired,
  orderObject:PropTypes.number.isRequired,
  orderDate:PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    ...state.headerOrder,
});
export default connect(mapStateToProps, {setTypeOrder, setObject,setDate })(GeneralAgreementInfo);