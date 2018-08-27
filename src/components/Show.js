import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { orderTypes, orderObjects } from '../data/orders.js';
import moment from 'moment';


class Show extends Component {

render(){
	const { orderType, orderObject, orderDate, name, registrationNumber, nameSellers } = this.props;
	return	(
	<div>
		<p>Show наш договор</p>
		<div>Договор { orderTypes[orderType].label }</div>
		<div>{ orderObjects[orderObject].label }</div>
		<div>{ moment(orderDate).format('DD/MM/YYYY') }</div>
		<p>СТОРОНИ</p>
	
		<p>{registrationNumber}</p>
		<p>Sellers {nameSellers}</p>
		<p>Buyer {name}</p>
		
	</div>
)
}

}

Show.propTypes = {
	orderType:PropTypes.number.isRequired,
	orderObject:PropTypes.number.isRequired,
	orderDate:PropTypes.object.isRequired,
	name:PropTypes.string.isRequired,
	registrationNumber:PropTypes.string.isRequired,
	nameSellers:PropTypes.string.isRequired,

}

const mapStateToProps = state => ({
   ...state.headerOrder,
   ...state.parties,
});
export default connect(mapStateToProps)(Show)

