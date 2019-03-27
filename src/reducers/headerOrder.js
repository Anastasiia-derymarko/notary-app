import { SET_TYPE_ORDER,SET_OBJECT, SET_DATE, SET_GENERAL_INFO_ORDER } from '../constans/setup'

let dataLocal = new Date();
let dataString = dataLocal.getFullYear()+'-0'+(+dataLocal.getMonth()+1)+'-'+dataLocal.getDate();
const initialState = {
  orderType: 1,
  orderObject: 1,
  orderDate: dataString,
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