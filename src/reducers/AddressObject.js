import { SET_CITY, SET_STATE_ADDRESS, SET_FOOTAGE } from '../constans/setup'


const initialState = {
  cityValue: 0,
  addressStateObject:{},
  footage:{
      numberOfRooms: '1',
      totalArea:'65,90',
      livingArea:'52,60',
  },
    address:{
        region: null,
        city: null,
        streetValue: null,
    }
};

export default function addressObject(state = initialState, action) {

  switch (action.type){
    case SET_CITY:
    return { ...state, cityValue: action.payload };

    case SET_STATE_ADDRESS:
    return { ...state, addressStateObject: action.payload };

      case SET_FOOTAGE:
        return{...state,footage: action.payload };

    default:
      return state;
  }

}