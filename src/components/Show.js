import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { orderTypes, orderObjects} from '../data/orders.js';
import moment from 'moment';
import '../components/style/show.css';
import ConvertingNumberToString from '../components/ConvertingNumberToString.js';

function Declination(props) {
	return (props.nameWorM !== 1 ? 'який зареєстрований' : 'яка зареєстрована')
}

function СonsistsText (numberOfRooms) {
    let number = numberOfRooms.number,
        classification = ["двох", "трьох", "чотирьох", "п'яти", "шести", "сьоми", "восьми", "дев'яти", "десяти",  "однокімнатна", "двокімнатна", "трьохкімнатна"]

    if (Number(number) > 1 ){
        return classification[number-2]+' жилих кімнат';
    }else{
        return 'однієї жилої кімнати';
    }
}

class Show extends Component {
render(){
	const { orderType, orderObject, orderDate, 
		registrationNumberSeller, nameSeller, addressSeller,
		registrationNumberBuyer, nameBuyer, addressBuyer,cityValue,addressStateObject, footage  } = this.props;

	return	(
	<div className="row">
		<div className="show">
			<div className="showHead bold">
				<p className="uppercase">{ orderTypes[orderType].label }</p>
				<p>{ orderObjects[orderObject].label }</p>
				<p className= "italic">Місто Київ, <ConvertingNumberToString number = { moment(orderDate).format('DD/MM/YYYY') }/></p>
			</div>
			<div className="showBody">
        <p>Попередньо ознайомившись з вимогами цивільного законодавства щодо недійсності правочинів, перебуваючи при здоровому розумі та ясній пам'яті, діючи добровільно, ми:</p>
				<span><span className = "bold uppercase italic">{nameSeller},</span> реєстраційний номер облікової картки платника податків <span className = "bold uppercase italic">{registrationNumberSeller}, </span>
		 			<Declination nameWorM = {parseInt(this.props.chooseMorWSeller, 10)}/> за адресою: {addressSeller}, – надалі «Продавець», 
		 			та <span className = "bold uppercase italic">{nameBuyer},</span> реєстраційний номер облікової картки платника податків <span className = "bold uppercase italic">{registrationNumberBuyer}, </span>
					<Declination nameWorM = {parseInt(this.props.chooseMorWBuyer, 10)}/> за адресою: {addressBuyer},  
					– надалі «Покупець», які також іменуються «Сторони», уклали цей договір про нижчевикладене:
				</span>
        <p>1. Продавці зобов’язуються передати у власність Покупця квартиру під номером 30 (тридцять), 
        що знаходиться в будинку під номером 2-А (два «А») на вулиці Піддубного Івана в місті{cityValue <= 0 ? '' : cityValue}, 
        а Покупець зобов’язується прийняти цю квартиру та сплатити за неї ціну відповідно до умов, 
        що визначені в цьому Договорі.</p>
                <p>Квартира, що відчужується, складається з <span className="bold"><СonsistsText number = { footage.numberOfRooms }/>. </span>Загальна площа квартири <span className="bold">{footage.totalArea} кв.м.,</span> в тому числі житлова – <span className="bold">{footage.livingArea} кв.м.</span></p>
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
  cityValue:PropTypes.number.isRequired,
  addressStateObject:PropTypes.object.isRequired,
    footage:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
   ...state.headerOrder,
   ...state.parties,
   ...state.addressObject,
});
export default connect(mapStateToProps)(Show)

