import React, { Component } from 'react';
import Select from 'react-select';
import { buildingOptions, typeObjectOptions } from '../data/orders.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCity, setStateAddress } from '../actions/SetupeActions';
import Footage from './addressAndFootage/footage';
import {Label, Placeholder, styleSelectMenu, Address, Row, Input, colorOptions} from '../components/styleComponents';


class AddressAgreement extends Component{
	constructor (props) {
    super(props);

    const {region, city, street} = this.props.address;

    this.state = {
      regions: {},
      region: region,
      areas:{},
      areaValue:this.props.areaValue,
      citys:{},
      city: city,
      streets:{},
      street: street,
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
              response.json().then(data => {
                  this.setState(() => ({regions: data}));
              });
          });
}
  handleRegionValueChange = selectedOption => {
    this.setState({ region: selectedOption });
    if (selectedOption){
        if (selectedOption.value === '9') {this.setState({city:'8859'})}

        fetch('http://lolololo.zzz.com.ua', {
            method: 'POST',
            body: JSON.stringify({
              action: 'area',
              column: 'region_id',
              number_strings : selectedOption.value,
            }),
            cache: 'no-cache',
          })
          .then(response => {
            response.json().then(data => {
              this.setState(() => ({areas: data}));
            });
          });
    }

  };
  handleAreaValueChange = selectedOption => {
    this.setState({ areaValue: selectedOption ? selectedOption.value : null });
    fetch('http://lolololo.zzz.com.ua', {
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
  };
  handleCityValueChange = selectedOption => {
    this.setState({ city: selectedOption ? selectedOption.value : null });
    this.props.setCity(selectedOption ? +selectedOption.value : null);
  };
  handleSelectValueChange = selectedOption => {
      const name = selectedOption.name;
      const value = selectedOption ? selectedOption.value : null ;
      this.setState({[name]: value});   
  };
  onInputChange = event => {
    const name = event.target.name;
    let value = event.target.value;

    if (name === 'numberOfRooms') {
        value = event.target.validity.valid ? event.target.value : this.state.numberOfRooms;
    }

    this.setState({[name]: value});
    this.props.setStateAddress(this.state);

  };
  handleStreetOnChange = event => {
        console.log(2222);
      const value = event.target.value;
    if(value.length < 3 ){
      return;
    }else {
      fetch('http://lolololo.zzz.com.ua', {
        method: 'POST',
        body: JSON.stringify({
          action: 'streets_test',
          city: this.state.city,
          search_q: value
        }),
        cache: 'no-cache',
      })
      .then(response => {
        response.json().then(data => {
          this.setState(() => ({streets: data}));
        });
      }); 
    }
  };

      render(){
    	const {region, regions, areas, areaValue, city,
        citys, streets, street, buildingValue, numberBuildingValue,
        typeObjectValue, numberObjectValue} = this.state

      let regionsOptions = Object.keys(regions).map(key => ({value: key, label: regions[key].name}));
      let areasOptions = Object.keys(areas).map(key => ({value: areas[key].id, label: areas[key].name}));
      let citysOptions = Object.keys(citys).map(key => ({value: citys[key].id, label: citys[key].name}));
      let streetsOptions = Object.keys(streets).map(key => ({value: streets[key].id, label: streets[key].Street}));

      let select = null;
      if(region === null || region.value === '9') {
        select = null;

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
                  value={city}
                  onChange={this.handleCityValueChange}
                  options={citysOptions}
                /></div>
      }  

    return(
        <Address>
            <Label>
                <Placeholder>Регіон:</Placeholder>
                <Select
                  name="region"
                  value={region}
                  onChange={this.handleRegionValueChange}
                  options={regionsOptions}
                  isClearable={true}
                  placeholder=""
                  theme={colorOptions}
                  styles={styleSelectMenu}
                />
            </Label>
                {select}
            <Label>
                <Placeholder>Вулиця:</Placeholder>
                  <Select
                    name ="street"
                    value={street}
                    options={streetsOptions}
                    onChange={this.handleStreetOnChange}
                    isClearable={true}
                    placeholder=""
                    theme={colorOptions}
                    styles={styleSelectMenu}
                  />
            </Label>
            <Row>
                <Label size="47%">
                    <Placeholder>Тип будівлі:</Placeholder>
                    <Select
                      name="buildingValue"
                      value={buildingValue}
                      onChange={this.handleSelectValueChange}
                      isClearable={true}
                      options={buildingOptions}
                      placeholder=""
                      theme={colorOptions}
                      styles={styleSelectMenu}
                    />
                </Label>
                <Label size="40%">
                    <Placeholder>№</Placeholder>
                    <Input
                        name="numberBuildingValue"
                        value={numberBuildingValue || ''}
                        onChange={this.onInputChange}
                    />
                </Label>
                <Label size='47%'>
                    <Placeholder>Тип об'єкта:</Placeholder>
                    <Select
                        name="numberObjectValue"
                        value={typeObjectValue}
                        onChange={this.handleSelectValueChange}
                        options={typeObjectOptions}
                        isClearable={true}
                        placeholder=""
                        theme={colorOptions}
                        styles={styleSelectMenu}
                    />
                </Label>
                <Label size="40%">
                  <Placeholder>№</Placeholder>
                  <Input
                      className ="input"
                      value={numberObjectValue || ''}
                      onChange={this.onInputChange}
                  />
                </Label>
            </Row>
            <Footage/>
        </Address>
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
