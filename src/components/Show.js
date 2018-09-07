import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { orderTypes, orderObjects, month, days, days_new } from '../data/orders.js';
import moment from 'moment';
import '../components/style/show.css';

function Declination(props) {
	return (props.nameWorM !== 1 ? 'який зареєстрований' : 'яка зареєстрована')
}

function ConvertingNumberToString(number){
	number = number.number;
		// number = props.number;
     number = number.split('/');
	
      
      number[0] = parseInt(number[0],10);
      number[1] = parseInt(number[1],10);
      number[1] = month[number[1]];
      var years = number[2].split('0');  

      // month
      if(number[1].slice(-3) === 'ень'){
       number[1] = number[1].slice(0, -3) + 'ня';
      }else if(number[1].slice(-2) === 'ий'){
        number[1] = number[1].slice(0, -2) + 'ого';
      }else{
        number[1] = number[1]+'а';
      }
      // day
      function fun_dayes (day){
        if(day <= 9){
        day = days_new[day];
        }else if(day >= 10 && day <= 19){
          day = days[1][day-10];
          day = day.slice(0, -1) + 'ого';
        }else{
          day= String(day).split('');
            day[0] = days[2][day[0]];
          if(day[1] == '0'){
            day[0] = day[0].slice(0, -1) + 'ого';
            delete day[1];
          }else{
            day[0] = day[0] + ' ';
            day[1] = days_new[day[1]];                    
          }  
          day = day.join('');
        }
        return day
      }

      number[0] = fun_dayes (number[0]);
      years[0] = 'дві тисячі';
      years[1] = fun_dayes (years[1]);
          
      var year_str = years.join(' '); 
      number[2] = year_str;
      var str = number.join(' ');
      console.log(str);          

      return str;          
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
				<p>Місто Київ, <ConvertingNumberToString number = { moment(orderDate).format('DD/MM/YYYY') }/></p>
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

