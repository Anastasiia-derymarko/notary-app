import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { orderTypes } from '../data/orders.js';

export default class Show extends Component {

render(){
	const { orderType, orderObject, orderDate, name, registrationNumber, address } = this.props
	return	(
	<div>
		<p>Show наш договор</p>
		<div>Договор {orderTypes[orderType].label }</div>
		<div>{ orderObject }</div>
		<div>{ orderDate }</div>
		<p>СТОРОНИ</p>
		<div>{ name }, {registrationNumber} зареєстрованИЙ за адресою {address}</div>
	
	</div>
)
}

}

Show.propTypes = {
	orderType:PropTypes.number.isRequired,
	orderObject:PropTypes.number.isRequired,
	orderDate:PropTypes.string.isRequired,
	name:PropTypes.string.isRequired,
	registrationNumber:PropTypes.number.isRequired,
	address:PropTypes.string.isRequired,
	
}
