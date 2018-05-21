import { SET_M_OR_W, SET_NAME } from '../constans/setup'

const initialState = {
  chooseMorW: '',
  name: '',
  registrationNumber: 0,
  address: '',
};

export default function parties(state = initialState, action) {
  
  switch (action.type){
  	case SET_M_OR_W:
  	return { ...state, chooseMorW: action.payload }
 	
 	case SET_NAME:
  	return { ...state, name: action.payload }
 	
  	default:
 	 	return state;
   }

}