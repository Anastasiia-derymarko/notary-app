import { SET_TYPE_ORDER } from '../constans/setup'
import { SET_OBJECT } from '../constans/setup'

export function setTypeOrder(orderType) {
	return {
		type: SET_TYPE_ORDER,
		paylod : orderType
	}
};

export function setObject(orderObject) {
	return {
		type: SET_OBJECT,
		paylod : orderObject
	}
};