import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { allRegions } from '../data/orders.js';

class AddressAgreement extends Component{
	constructor (props) {
    super(props);

    this.state = {
      regionValue:' ',
      regions: {},
    }

  }

  componentDidMount()
  {
     fetch('http://localhost', {
        method: 'POST',
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json'
        // },
        body: JSON.stringify({
          action: 'region',
        }),
        cache: 'no-cache',
      })
      .then(response => {
        response.json().then(data => {
          this.setState(() => ({regions: data}));
        });
      });
  }

  handleRegionValueChange = selectedOption => {
    this.setState({ regionValue: selectedOption ? selectedOption.value : null });
  }
      render(){
    	const {regionValue, regions} = this.state

      let regionsOptions = Object.keys(regions).map(key => ({value: key, label: regions[key].name}));
      console.log (regionsOptions);

    	return(
    		<div>
    			<Select
		          name="region"
		          value={regionValue}
		          onChange={this.handleRegionValueChange}
		          options={regionsOptions}
        		/>
    		</div>
	    	
    	);
    }
}

export default (AddressAgreement);