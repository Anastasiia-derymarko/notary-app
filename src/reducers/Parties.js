import { SET_M_OR_W, SET_NAME, SET_NAME_SELLER, SET_REGISTRATION_NUMBER } from '../constans/setup'

const initialState = {
  chooseMorW: '',
  name: '',
  registrationNumber: '',
  address: '',
  nameSellers:'',
};

export default function parties(state = initialState, action) {
  
  switch (action.type){
  	case SET_M_OR_W:
  	return { ...state, chooseMorW: action.payload }
 	
  	case SET_NAME:
  	return { ...state, name: action.payload }
 	  
    case SET_REGISTRATION_NUMBER:
    return { ...state, registrationNumber: action.payload }	

    case SET_NAME_SELLER:
    return { ...state, nameSellers: action.payload } 
    
    default:
 	 	return state;
   }

}