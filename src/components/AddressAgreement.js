import React, { Component } from 'react';
import Select from 'react-select';
import { buildingOptions, typeObjectOptions } from '../data/orders.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCity, setStateAddress } from '../actions/SetupeActions';
import Footage from './addressAndFootage/footage';
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
      streetOptions:[],
      buildingValue:this.props.buildingValue,
      numberBuildingValue:this.props.numberBuildingValue,
      typeObjectValue:this.props.typeObjectValue,
      numberObjectValue:this.props.numberObjectValue,

    }
  }

  componentDidMount()
  {
     fetch('http://lolololo.zzz.com.ua', {
        method: 'POST',
         body: JSON.stringify({
          action: 'region',
        }),
         cache: 'no-cache',
      })
      .then(response => {
          console.log(response);
        response.json().then(data => {
          this.setState(() => ({regions: data}));
        });
      });
}
  handleRegionValueChange = selectedOption => {
    this.setState({ regionValue: selectedOption ? selectedOption.value : null });

    if (selectedOption.value === '9') {this.setState({cityValue:'8859'})}
    fetch('http://lolololo.zzz.com.ua/notaryApp', {
        method: 'POST',
        body: JSON.stringify({
          action: 'area',
          column: 'region_id',
          number_strings : selectedOption ? selectedOption.value : null
        }),
        cache: 'no-cache',
      })
      .then(response => {
        response.json().then(data => {
          this.setState(() => ({areas: data}));
        });
      });
  }
  handleAreaValueChange = selectedOption => {
    this.setState({ areaValue: selectedOption ? selectedOption.value : null });
    fetch('http://lolololo.zzz.com.ua/notaryApp', {
        method: 'POST',
        body: JSON.stringify({
          action: 'city',
          column: 'area_id',
          number_strings : selectedOption ? selectedOption.value : null
        }),
        cache: 'no-cache',
      })
      .then(response => {
        response.json().then(data => {
          this.setState(() => ({citys: data}));
        });
      }); 
  }

  handleCityValueChange = selectedOption => {
    this.setState({ cityValue: selectedOption ? selectedOption.value : null });
    this.props.setCity(selectedOption ? +selectedOption.value : null)  

      
  }  
   handleSelectValueChange = selectedOption => {
      const name = selectedOption.name;
      const value = selectedOption ? selectedOption.value : null ;
      this.setState({[name]: value});   
  }
  onInputChange = event => {
    const name = event.target.name;
    let value = event.target.value;

    if (name === 'numberOfRooms') {
        value = event.target.validity.valid ? event.target.value : this.state.numberOfRooms;
    }

    this.setState({[name]: value});
    this.props.setStateAddress(this.state);

  }
  handleStreetOnChange = event => {

    if(event.target.value.length < 3 ){
      return;
    }else {
      console.log(this.state.cityValue);
    console.log(event.target.value);

      fetch('http://lolololo.zzz.com.ua/notaryApp', {
        method: 'POST',
        body: JSON.stringify({
          action: 'streets_test',
          city: this.state.cityValue,
          search_q:event.target.value
        }),
        cache: 'no-cache',
      })
      .then(response => {
        response.json().then(data => {
          this.setState(() => ({streets: data}));
        });
      }); 
    }
  }



      render(){
    	const {regionValue, regions, areas, areaValue, 
        citys, streets, streetValue, buildingValue, numberBuildingValue, 
        typeObjectValue, numberObjectValue} = this.state
      const {cityValue} = this.props
      
        console.log('test');

      let regionsOptions = Object.keys(regions).map(key => ({value: key, label: regions[key].name}));
      let areasOptions = Object.keys(areas).map(key => ({value: areas[key].id, label: areas[key].name}));
      let citysOptions = Object.keys(citys).map(key => ({value: citys[key].id, label: citys[key].name}));
      let streetsOptions = Object.keys(streets).map(key => ({value: streets[key].id, label: streets[key].Street}));

      let select = null;
      if(regionValue === undefined || regionValue === '9') {
        select = <div></div>;

      }else{
        select = <div style = {{width: "100%"}}>
                <span>Район:</span>
                <Select
                  name="area"
                  value={areaValue}
                  onChange={this.handleAreaValueChange}
                  options={areasOptions}
                /> 
                <span>місто/село:</span>
                <Select
                  name="city"
                  value={cityValue}
                  onChange={this.handleCityValueChange}
                  options={citysOptions}
                /></div>
      }  

      return(
        <div style = {{position:"relative"}}>
          <div className = "column">
            <div className= "column address">
              <span>Регіон:</span>
        			<Select
    		          name="region"
    		          value={regionValue}
    		          onChange={this.handleRegionValueChange}
    		          options={regionsOptions}
            		/> 
                {select}
                <span>вулиця:</span>
                <div className = "street">
                  <input 
                    list="street" 
                    autoComplete="on" 
                    onChange={this.handleStreetOnChange}
                    value = {streetValue}  
                    />
                  <datalist id="street">
                  {streetsOptions.map((post) =>
                    <option key={post.value}>
                      {post.label}
                    </option>
                  )}
                  </datalist>
                </div>
              </div>

          		<div className="column building">
                <div className = "label_building">
                  <label className ="type">Тип будівлі:
                    <Select
                          name="buildingValue"
                          value={buildingValue}
                          onChange={this.handleSelectValueChange}
                          options={buildingOptions}
                        /> 
                  </label>
                  <label className = "number"> №
                    <input
                      className ="input"
                      name="numberBuildingValue"
                      value={numberBuildingValue || ''}
                      onChange={this.onInputChange}
                    /> 
                  </label>
                </div>
                <div className = "label_building">
                  <label className ="type">Тип об'єкта:
                    <Select
                        name="numberObjectValue"
                        value={typeObjectValue}
                      onChange={this.handleSelectValueChange}
                      options={typeObjectOptions}
                    /> 
                  </label>
                  <label className = "number"> №
                    <input
                      className ="input"
                      value={numberObjectValue || ''}
                      onChange={this.onInputChange}
                    /> 
                  </label>
                </div>
                <Footage/>
                </div>
          </div>
        </div>
    	);
    }
}

AddressAgreement.propTypes = {
  setCity: PropTypes.func.isRequired,
  setStateAddress:PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    ...state.addressObject,
});
export default connect(mapStateToProps, {setCity, setStateAddress})(AddressAgreement);
