import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { orderTypes, orderObjects } from '../data/orders.js';
import moment from 'moment';
import '../components/style/show.css';

function Declination(props) {
	return (props.nameWorM !== 1 ? 'який зареєстрований' : 'яка зареєстрована')
}

class Show extends Component {
render(){
	const { orderType, orderObject, orderDate, 
		registrationNumberSeller, nameSeller, addressSeller,
		registrationNumberBuyer, nameBuyer, addressBuyer  } = this.props;
	return	(
	<div className="row">
		<div className="show">
			<div className="showHead">
				<p>Договор { orderTypes[orderType].label }</p>
				<p>{ orderObjects[orderObject].label }</p>
				<p>{ moment(orderDate).format('DD/MM/YYYY') }</p>
			</div>
			<div className="showBody">
				<p>Ми, гр. України {nameSeller}, реєстраційний номер облікової картки платника податків {registrationNumberSeller},
		 			<Declination nameWorM = {parseInt(this.props.chooseMorWSeller, 10)}/> за адресою: {addressSeller}, – надалі «Продавець», 
		 			та гр. України {nameBuyer}, реєстраційний номер облікової картки платника податків {registrationNumberBuyer}, 
					<Declination nameWorM = {parseInt(this.props.chooseMorWBuyer, 10)}/> за адресою: {addressBuyer},  
					– надалі «Покупець», які також іменуються «Сторони», уклали цей договір про нижчевикладене:
				</p>
			</div>	
		</div>		
	</div>
)
}

}

Show.propTypes = {
	orderType:PropTypes.number.isRequired,
	orderObject:PropTypes.number.isRequired,
	orderDate:PropTypes.object.isRequired,
	registrationNumberSeller:PropTypes.string.isRequired,
	nameSeller:PropTypes.string.isRequired,
  	addressSeller:PropTypes.string.isRequired,
  	registrationNumberBuyer:PropTypes.string.isRequired,
	nameBuyer:PropTypes.string.isRequired,
  	addressBuyer:PropTypes.string.isRequired,
  	chooseMorWSeller:PropTypes.string.isRequired,
  	chooseMorWBuyer:PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
   ...state.headerOrder,
   ...state.parties,
});
export default connect(mapStateToProps)(Show)

