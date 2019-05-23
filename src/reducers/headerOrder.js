import { SET_MAIN_PARAMETERS } from '../constans/setup'

// let dataLocal = new Date();
// let dataString = dataLocal.getFullYear()+'-0'+(+dataLocal.getMonth()+1)+'-'+dataLocal.getDate();

const initialState = {
    mainParametersContract:{
        orderType: {label: "договір купівлі-продажу", value: 1},
        orderObject: {label: "квартири", value: 1, },
        orderDate: '2019-05-05',
    }
};

export default function headerOrder(state = initialState, action) {
  
  switch (action.type){
  	case SET_MAIN_PARAMETERS:
  	return { ...state, mainParametersContract: action.payload }

  	default:
  	  return state;
  }

}