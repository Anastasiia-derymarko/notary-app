import { SET_M_OR_W, SET_NAME_SELLER, SET_REGISTRATION_NUMBER, SET_ADDRESS_SELLER } from '../constans/setup'

const initialState = {
  chooseMorWSeller: '',
  registrationNumberSeller: '',
  address: '',
  nameSeller:'',
  addressSeller:'',
};

export default function parties(state = initialState, action) {
  
  switch (action.type){
  	case SET_M_OR_W:
  	return { ...state, chooseMorWSeller: action.payload }
 	  
    case SET_REGISTRATION_NUMBER:
    return { ...state, registrationNumberSeller: action.payload }	

    case SET_NAME_SELLER:
    return { ...state, nameSeller: action.payload } 
    
    case SET_ADDRESS_SELLER:
    return { ...state, addressSeller: action.payload } 
    
    default:
 	 	return state;
   }

}