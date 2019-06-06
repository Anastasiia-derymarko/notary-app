import { SET_STATE_ADDRESS, SET_FOOTAGE } from '../constans/setup'


const initialState = {
    address:{
        region: {value: "9", label: "Київ"},
        area: null,
        city: {value: "9", label: "Київ"},
        street: {value: "114857", label: "вул. Піддубного Івана"},
        typeBuilding: {label: "будинок", value: 1},
        numberBuildingValue: '2-А',
        typeObjectValue: {label: "квартира", value: 2},
        numberObjectValue: 30,
    },
    footage:{
        numberOfRooms: '1',
        totalArea:'65,90',
        livingArea:'52,60',
    },
};

export default function addressObject(state = initialState, action) {
    let name;
    let obj;

    for (let i in action.payload){
        name = i;
        obj = action.payload[i];
    }

    switch (action.type){
        case SET_STATE_ADDRESS:
        return { ...state, address: {...state.address, [name]: obj}};

          case SET_FOOTAGE:
            return{...state,footage: {...state.footage, [name]: obj}};

        default:
          return state;
  }

}