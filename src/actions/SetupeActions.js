import { createAction } from 'redux-actions';
import { SET_MAIN_PARAMETERS, SET_OBJECT, SET_DATE, SET_CITY, SET_STATE_ADDRESS, SET_FOOTAGE, SET_DOC_SELLER, SET_PRICE, SET_SELLER, SET_BUYER } from '../constans/setup';

export const setMainParameters = createAction(SET_MAIN_PARAMETERS);
export const setObject = createAction(SET_OBJECT);
export const setDate = createAction(SET_DATE);
export const setCity = createAction(SET_CITY);
export const setStateAddress = createAction(SET_STATE_ADDRESS);
export const setFootage= createAction(SET_FOOTAGE);
export const setDocSeller = createAction(SET_DOC_SELLER);
export const setPrice = createAction(SET_PRICE);
export const setBuyer = createAction(SET_BUYER);
export const setSeller = createAction(SET_SELLER);

