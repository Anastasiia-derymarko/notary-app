import { createAction } from 'redux-actions';
import { SET_TYPE_ORDER, SET_OBJECT, SET_DATE, 
	SET_M_OR_W, SET_REGISTRATION_NUMBER, SET_NAME_SELLER, SET_ADDRESS_SELLER,
	SET_M_OR_W_BUYER, SET_NAME_BUYER, SET_ADDRESS_BUYER, SET_REGISTRATION_NUMBER_BUYER,SET_CITY, SET_STATE_ADDRESS, SET_FOOTAGE } from '../constans/setup';

export const setTypeOrder = createAction(SET_TYPE_ORDER);
export const setObject = createAction(SET_OBJECT);
export const setDate = createAction(SET_DATE);
export const setMorW = createAction(SET_M_OR_W);
export const setRegistrationNumber = createAction(SET_REGISTRATION_NUMBER);
export const setNameSeller = createAction(SET_NAME_SELLER);
export const setAddressSeller = createAction(SET_ADDRESS_SELLER);
export const setMorWBuyer = createAction(SET_M_OR_W_BUYER);
export const setRegistrationNumberBuyer = createAction(SET_REGISTRATION_NUMBER_BUYER);
export const setNameBuyer = createAction(SET_NAME_BUYER);
export const setAddressBuyer = createAction(SET_ADDRESS_BUYER);
export const setCity = createAction(SET_CITY);
export const setStateAddress = createAction(SET_STATE_ADDRESS);
export const setFootage= createAction(SET_FOOTAGE);

