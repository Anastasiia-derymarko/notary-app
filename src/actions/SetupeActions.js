import { SET_TYPE_ORDER } from '../constans/setup'

export function setTypeOrder(orderType) {
	return {
		type: SET_TYPE_ORDER,
		paylod : orderType
	}
}
