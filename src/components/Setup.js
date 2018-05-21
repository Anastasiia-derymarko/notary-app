import React, { Component } from 'react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { orderTypes, orderObjects } from '../data/orders.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Parties from '../components/Parties.js';
import { connect } from 'react-redux';
import { setTypeOrder, setObject, setDate } from '../actions/SetupeActions';

import moment from 'moment';
import PropTypes from 'prop-types';

class Setup extends Component {
  constructor (props) {
    super(props);

    this.state = {
      orderType: this.props.orderType,
      orderObject: this.props.orderObject,
      orderDate: this.props.orderDate,
    };
  }

  componentWillReceiveProps (nextProps) {
    // console.log(nextProps);
    
  }

  handleOrderTypeChange = selectedOption => {
    this.setState({ orderType: selectedOption ? selectedOption.value : null });
    this.props.setTypeOrder(+selectedOption.value)

  }

  handleOrderObjectChange = selectedOption => {
    this.setState({ orderObject: selectedOption ? selectedOption.value : null });
    this.props.setObject(+selectedOption.value)  
  }

  handleOrderDateChange = date => {
    this.setState({ orderDate:date});   
    this.props.setDate(date)   
    
  }
 render() {

    const {orderType, orderObject, orderDate} = this.props

    return (
      <div>
        <Select
          name="order_type"
          value={orderType}
          onChange={this.handleOrderTypeChange}
          options={orderTypes}
        />
        <Select
          name="order_object"
          value={orderObject}
          onChange={this.handleOrderObjectChange}
          options={orderObjects}
        />
         <DatePicker
        dateFormat="DD/MM/YYYY"
        selected={moment(orderDate)}
        onChange={this.handleOrderDateChange}
        />     
      <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-between'}}>  
      <Parties foo='Продавець'/>
      <Parties foo='Покупець'/>
      </div>
      
      </div>
    );
  }
}


Setup.propTypes = {
  setTypeOrder: PropTypes.func.isRequired,
  setObject: PropTypes.func.isRequired,
  setDate: PropTypes.func.isRequired,
  orderType:PropTypes.number.isRequired,
  orderObject:PropTypes.number.isRequired,
  orderDate:PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    ...state.headerOrder
});

export default connect(mapStateToProps, {setTypeOrder, setObject, setDate})(Setup);
