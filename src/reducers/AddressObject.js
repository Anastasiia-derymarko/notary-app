import { SET_STATE_ADDRESS, SET_FOOTAGE } from '../constans/setup'


const initialState = {
    address:{
        region: {value: "9", label: "Київ"},
        area: null,
        city: {value: "9", label: "Київ"},
        street: {value: "114857", label: "вул. Піддубного Івана"},
        buildingValue: null,
        numberBuildingValue: null,
        typeObjectValue: null,
        numberObjectValue: 30,
    },
    footage:{
        numberOfRooms: '1',
        totalArea:'65,90',
        livingArea:'52,60',
    },
};

export default function addressObject(state = initialState, action) {

  switch (action.type){
    case SET_STATE_ADDRESS:
    return { ...state, address: action.payload };

      case SET_FOOTAGE:
        return{...state,footage: action.payload };

    default:
      return state;
  }

}