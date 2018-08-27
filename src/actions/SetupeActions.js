import { createAction } from 'redux-actions';
import { SET_TYPE_ORDER, SET_OBJECT, SET_DATE, SET_M_OR_W, SET_NAME, SET_REGISTRATION_NUMBER, SET_NAME_SELLER } from '../constans/setup';

export const setTypeOrder = createAction(SET_TYPE_ORDER);
export const setObject = createAction(SET_OBJECT);
export const setDate = createAction(SET_DATE);
export const setMorW = createAction(SET_M_OR_W);
export const setName = createAction(SET_NAME);
export const setRegistrationNumber = createAction(SET_REGISTRATION_NUMBER);
export const setNameSeller = createAction(SET_NAME_SELLER);