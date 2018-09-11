import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class AddressAgreement extends Component{
	constructor (props) {
    super(props);

    this.state = {
      regions: {},
      regionValue:this.props.regionValue,
      areas:{},
      areaValue:this.props.areaValue,
      citys:{},
      cityValue:this.props.cityValue,
      streets:{},
      streetValue:this.props.streetValue,
    }

  }

  componentDidMount()
  {
     fetch('http://localhost', {
        method: 'POST',
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
  {
     fetch('http://localhost', {
        method: 'POST',
        body: JSON.stringify({
          action: 'area',
        }),
        cache: 'no-cache',
      })
      .then(response => {
        response.json().then(data => {
          this.setState(() => ({areas: data}));
        });
      });

     fetch('http://localhost', {
        method: 'POST',
        body: JSON.stringify({
          action: 'city',
        }),
        cache: 'no-cache',
      })
      .then(response => {
        response.json().then(data => {
          this.setState(() => ({citys: data}));
        });
      }); 
  }
}
  handleRegionValueChange = selectedOption => {
    this.setState({ regionValue: selectedOption ? selectedOption.value : null });
    
  }
  areasFilterFun = value => {
     return value.region_id == this.state.regionValue;
  }
  handleAreaValueChange = selectedOption => {
    this.setState({ areaValue: selectedOption ? selectedOption.value : null });
  }
  citysFilterFun = value => {
     return value.area_id == this.state.areaValue;
  }
  handleCityValueChange = selectedOption => {
    this.setState({ cityValue: selectedOption ? selectedOption.value : null });
    fetch('http://localhost', {
        method: 'POST',
        body: JSON.stringify({
          action: 'streets',
          type2 : selectedOption ? selectedOption.value : null
        }),
        cache: 'no-cache',
      })
      .then(response => {
        response.json().then(data => {
          this.setState(() => ({streets: data}));
        });
      }); 
  }  
  handleStreetValueChange = selectedOption => {
    this.setState({ streetValue: selectedOption ? selectedOption.value : null });
  }  
  
      render(){
    	const {regionValue, regions, areas, areaValue, cityValue, citys, streets, streetValue} = this.state
      let regionsOptions = Object.keys(regions).map(key => ({value: key, label: regions[key].name}));
    
      let areasFilter = Object.values(areas).filter(this.areasFilterFun);
      let areasOptions = Object.keys(areasFilter).map(key => ({value: areasFilter[key].id, label: areasFilter[key].name}));

      let citysFilter = Object.values(citys).filter(this.citysFilterFun);
      let citysOptions = Object.keys(citysFilter).map(key => ({value: citysFilter[key].id, label: citysFilter[key].name}));

      let streetsOptions = Object.keys(streets).map(key => ({value: streets[key].id, label: streets[key].Street}));


    	return(
    		<div className = "column address_iput_style">
    			<Select
		          name="region"
		          value={regionValue}
		          onChange={this.handleRegionValueChange}
		          options={regionsOptions}
        		/> 
            <Select
              name="area"
              value={areaValue}
              onChange={this.handleAreaValueChange}
              options={areasOptions}
            /> 
            <Select
              name="city"
              value={cityValue}
              onChange={this.handleCityValueChange}
              options={citysOptions}
            /> 
            <Select
              name="street"
              value={streetValue}
              onChange={this.handleStreetValueChange}
              options={streetsOptions}
            /> 
         
    		</div>
	    	
    	);
    }
}

export default (AddressAgreement);