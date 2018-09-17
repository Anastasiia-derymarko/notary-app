import { combineReducers } from 'redux'
import headerOrder from './headerOrder'
import parties from './Parties'
import addressObject from './AddressObject'

export default combineReducers({
	headerOrder,
	parties,
  addressObject
})
  
