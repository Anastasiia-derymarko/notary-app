import { SET_CITY, SET_STATE_ADDRESS } from '../constans/setup'


const initialState = {
  cityValue: 0,
  addressStateObject:{},
};

export default function addressObject(state = initialState, action) {
  
  switch (action.type){
    case SET_CITY:
    return { ...state, cityValue: action.payload }

    case SET_STATE_ADDRESS:
    return { ...state, addressStateObject: action.payload }

    default:
      return state;
  }

}