import { combineReducers } from 'redux'
import headerOrder from './headerOrder'
import parties from './Parties'
import addressObject from './AddressObject'
import docSeller from './docSeller'
import price from './price'

export default combineReducers({
	headerOrder,
	parties,
  	addressObject,
    docSeller,
	price,
})
  
