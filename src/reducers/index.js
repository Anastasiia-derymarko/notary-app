const initialState = {
  orderType: 'sss',
  orderObject:null,
  orderDate: 'дата dkd',

};

export default function show(state = initialState, action) {
  
switch (action.type){
	case 'SET_TYPE':
  return {...state, orderType:action.paylod }

  default:
  return state;
}
}