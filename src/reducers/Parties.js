import { SET_SELLER, SET_BUYER } from '../constans/setup'

const initialState = {
    seller:{
        chooseMorWSeller: '1',
        registrationNumberSeller: '2875016385',
        nameSeller:'Школьна Наталія Петрівна',
        addressSeller:'с. Борова Фастівського р-ну Київської обл., вул. Р. Люксембург, буд. 28, кв. 5,',
        statementSeller: false,
        genderSeller: 'NCL::$WOMEN',
    },
    spouseSeller:{},
    buyer:{
        chooseMorWBuyer: '1',
        registrationNumberBuyer: '2544412288',
        nameBuyer: 'Римар Людмила Петрівна',
        addressBuyer: 'с. Борова Фастівського р-ну Київської обл., вул. Миру, буд. 20,',
        statementBuyer: false,
        genderBuyer: 'NCL::$WOMEN',
    },
    spouseBuyer:{},
};

export default function parties(state = initialState, action) {
  
  switch (action.type){
    case SET_SELLER:
    return { ...state, seller: action.payload };

    case SET_BUYER:
    return { ...state, buyer: action.payload };
    
    default:
 	 	return state;
   }

}