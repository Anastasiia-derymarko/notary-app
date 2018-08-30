import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { allRegions } from '../data/orders.js';

class AddressAgreement extends Component{
	constructor (props) {
    super(props);

    this.state = {
      regionValue:' ',

    }

  }
  handleRegionValueChange = selectedOption => {
    this.setState({ regionValue: selectedOption ? selectedOption.value : null });
    // this.props.setTypeOrder(+selectedOption.value)

  }
    render(){
    	const {regionValue} = this.state
    	return(
    		<div>
    			<Select
		          name="region"
		          value={this.state.regionValue}
		          onChange={this.handleRegionValueChange}
		          options={allRegions}
        		/>
    		</div>
	    	
    	);
    }
}

export default (AddressAgreement);