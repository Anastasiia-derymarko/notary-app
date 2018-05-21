import { SET_TYPE_ORDER,SET_OBJECT, SET_DATE } from '../constans/setup'
import moment from 'moment'; 

const initialState = {
  orderType: 0,
  orderObject: 0,
  orderDate: moment(), 
};

export default function headerOrder(state = initialState, action) {
  
  switch (action.type){
  	case SET_TYPE_ORDER:
  	return { ...state, orderType: action.payload }

  	case SET_OBJECT:
  	return { ...state, orderObject: action.payload }

    case SET_DATE:
    return { ...state, orderDate: action.payload }

  	default:
  	  return state;
  }

}