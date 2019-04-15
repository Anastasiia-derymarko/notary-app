import { SET_M_OR_W, SET_NAME_SELLER, SET_REGISTRATION_NUMBER, SET_ADDRESS_SELLER,
  SET_M_OR_W_BUYER, SET_NAME_BUYER, SET_ADDRESS_BUYER, SET_REGISTRATION_NUMBER_BUYER, SET_BUYER } from '../constans/setup'

const initialState = {
    seller:{
      chooseMorWSeller: '1',
      registrationNumberSeller: '2875016385',
      nameSeller:'Школьна Наталія Петрівна',
      addressSeller:'с. Борова Фастівського р-ну Київської обл., вул. Р. Люксембург, буд. 28, кв. 5,',
    },
    buyer:{
        chooseMorWBuyer: '1',
        registrationNumberBuyer: '2544412288',
        nameBuyer: 'Римар Людмила Петрівна',
        addressBuyer: 'с. Борова Фастівського р-ну Київської обл., вул. Миру, буд. 20,',
        statementBuyer: false,
    },
    chooseMorWSeller: '1',
    registrationNumberSeller: '2875016385',
    nameSeller:'Школьна Наталія Петрівна',
  addressSeller:'с. Борова Фастівського р-ну Київської обл., вул. Р. Люксембург, буд. 28, кв. 5,',
  chooseMorWBuyer: '1',
  registrationNumberBuyer: '2544412288',
  nameBuyer:'Римар Людмили Петрівни',
  addressBuyer:'с. Борова Фастівського р-ну Київської обл., вул. Миру, буд. 20,',
};

export default function parties(state = initialState, action) {
  
  switch (action.type){
  	case SET_M_OR_W:
  	return { ...state, chooseMorWSeller: action.payload };
 	  
    case SET_REGISTRATION_NUMBER:
    return { ...state, registrationNumberSeller: action.payload };

    case SET_NAME_SELLER:
    return { ...state, nameSeller: action.payload } ;
    
    case SET_ADDRESS_SELLER:
    return { ...state, addressSeller: action.payload } ;

    case SET_M_OR_W_BUYER:
    return { ...state, chooseMorWBuyer: action.payload };
    
    case SET_REGISTRATION_NUMBER_BUYER:
    return { ...state, registrationNumberBuyer: action.payload } ;

    case SET_NAME_BUYER:
    return { ...state, nameBuyer: action.payload } ;
    
    case SET_ADDRESS_BUYER:
    return { ...state, addressBuyer: action.payload };

      case SET_BUYER:
        return { ...state, buyer: action.payload };
    
    default:
 	 	return state;
   }

}