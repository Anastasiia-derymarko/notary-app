import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Show extends Component {

render(){
	const { orderType } = this.props
	return	<div>
	<p>Show наш договор</p>
		<div>Договор { orderType }</div>
		<div></div>
		<div></div>
		
	</div>

}

}

Show.propTypes = {
	orderType:PropTypes.string.isRequired
}
