import { SET_M_OR_W, SET_NAME_SELLER, SET_REGISTRATION_NUMBER, SET_ADDRESS_SELLER,
  SET_M_OR_W_BUYER, SET_NAME_BUYER, SET_ADDRESS_BUYER, SET_REGISTRATION_NUMBER_BUYER} from '../constans/setup'

const initialState = {
  chooseMorWSeller: '',
  registrationNumberSeller: '',
  nameSeller:'',
  addressSeller:'',
  chooseMorWBuyer: '',
  registrationNumberBuyer: '',
  nameBuyer:'',
  addressBuyer:'',
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

    case SET_M_OR_W_BUYER:
    return { ...state, chooseMorWBuyer: action.payload }
    
    case SET_REGISTRATION_NUMBER_BUYER:
    return { ...state, registrationNumberBuyer: action.payload } 

    case SET_NAME_BUYER:
    return { ...state, nameBuyer: action.payload } 
    
    case SET_ADDRESS_BUYER:
    return { ...state, addressBuyer: action.payload }
    
    default:
 	 	return state;
   }

}