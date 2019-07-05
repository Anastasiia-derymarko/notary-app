import { SET_MAIN_PARAMETERS } from '../constans/setup'

const initialState = {
    mainParametersContract:{
        orderType: {label: "договір купівлі-продажу", value: 1},
        orderObject: {label: "квартири", value: 1},
        orderDate: '2019-05-05',
    }
};

export default function headerOrder(state = initialState, action) {
    let name;
    let obj;

    for (let i in action.payload){
        name = i;
        obj = action.payload[i];
    }

  switch (action.type){
  	case SET_MAIN_PARAMETERS:
  	return { ...state, mainParametersContract: {...state.mainParametersContract, [name]: obj}};

  	default:
  	  return state;
  }

}