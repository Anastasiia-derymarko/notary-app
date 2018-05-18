import { SET_TYPE_ORDER } from '../constans/setup'
 
const initialState = {
  orderType: 0,
  orderObject: 0,
  orderDate: 'дванадцятого січня дві тисячі вісімнадцятого року',
};

export default function headerOrder(state = initialState, action) {
  

  switch (action.type){
  	case SET_TYPE_ORDER:
  	return {...state, orderType:action.paylod}

  	default:
  	  return state;
  }
}