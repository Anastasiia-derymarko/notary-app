import React, { Component } from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/lib/Async';
import { buildingOptions, typeObjectOptions } from '../components/data/orders.js';
import { connect } from 'react-redux';
import { setStateAddress } from '../store/actions/SetupeActions';
import Footage from '../components/addressAndFootage/footage';
import {Label, Placeholder, styleSelectMenu, Address, Row, Input, colorOptions} from '../styleComponents/styleComponents';

const AsyncAddress = async (action, column, numberStrings) => {
    let resolve, reject;
    const result = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });

    fetch('http://lolololo.zzz.com.ua', {
        method: 'POST',
        body: JSON.stringify({
            action: action,
            column: column,
            number_strings: numberStrings,
        }),
        cache: 'no-cache',
    })
    .then(response => {
        response.json().then(data => {
            resolve(data);
        });
    }).catch((err) => reject(err));
    return result;
};

class AddressAgreement extends Component{
	constructor (props) {
    super(props);

    const {region, area, city, street, typeBuilding, numberBuildingValue, typeObjectValue, numberObjectValue} = this.props.address;

    this.state = {
        regions: {},
        areas:{},
        citys:{},
        region: region,
        area: area,
        city: city,
        street: street,
        typeBuilding: typeBuilding,
        numberBuildingValue: numberBuildingValue,
        typeObjectValue: typeObjectValue,
        numberObjectValue: numberObjectValue,
    }
  }

  async componentDidMount()
  {
      AsyncAddress('region').then(data => this.setState(() => ({regions: data})));
  };

  handleRegionValueChange = (selectedOption, inputName) => {
    let name = inputName.name;
    let query = {
        region: ['area', 'region_id','areas'],
        area: ['city', 'area_id', 'citys'],
    };

    this.setState({[name]: selectedOption }, () => {this.props.setStateAddress({[name]: selectedOption })});

    if (selectedOption != null ) {
        if(selectedOption.value === '9'){
            this.setState({city:'8859'}, () => {
                this.props.setStateAddress({city:'8859'})
            });
        }else {
            AsyncAddress(query[name][0], query[name][1], selectedOption.value).then(data => this.setState(() => ({[query[name][2]]: data})));
        }
    }
  };

  handleSelectChange = (selectedOption, inputName) => {
      let name = inputName.name;
      this.setState({[name]: selectedOption}, () => this.props.setStateAddress({[name]: selectedOption}));
  };

  onInputChange = event => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === 'numberOfRooms') {
        value = event.target.validity.valid ? event.target.value : this.state.numberOfRooms;
    }
    this.setState({[name]: value},() => this.props.setStateAddress({[name]: value}));
  };

  promiseOptionsStreet = (inputValue, callback) => {
      const value = inputValue;

      if(this.state.city.label === 'Київ' && value.length < 3) {
          return;
      }else {
          fetch('http://lolololo.zzz.com.ua', {
              method: 'POST',
              body: JSON.stringify({
                  action: 'streets_test',
                  column: 'Region',
                  Region: this.state.region.value,
                  search_q: value
              }),
              cache: 'no-cache',
          })
              .then(response => {
                  response.json().then(data => {
                      let streetsOptions = Object.keys(data).map(key => ({value: data[key].id, label: data[key].Street}));
                      callback(streetsOptions);
                  });
              });
      }
  };
      render(){
    	const {regions, region, areas, area, city,
        citys, street, typeBuilding, numberBuildingValue,
        typeObjectValue, numberObjectValue} = this.state;

        let regionsOptions = Object.keys(regions).map(key => ({value: key, label: regions[key].name}));
        let areasOptions = Object.keys(areas).map(key => ({value: areas[key].id, label: areas[key].name}));
        let citysOptions = Object.keys(citys).map(key => ({value: citys[key].id, label: citys[key].name}));

      let select = null;
      if(region === null || region.value === '9') {
        select = null;

      }else{
        select = <div style = {{width: "100%"}}>
                <Label>Район:</Label>
                <Select
                  name="area"
                  value={area}
                  onChange={this.handleRegionValueChange}
                  options={areasOptions}
                /> 
                <Label>місто/село:</Label>
                <Select
                  name="city"
                  value={city}
                  onChange={this.handleSelectChange}
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
                <AsyncSelect
                    loadOptions={(query, callback) => this.promiseOptionsStreet(query, callback)}
                    name ="street"
                    value={street}
                    onChange={this.handleSelectChange}
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
                      name="typeBuilding"
                      value={typeBuilding}
                      onChange={this.handleSelectChange}
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
                        name="typeObjectValue"
                        value={typeObjectValue}
                        onChange={this.handleSelectChange}
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
                      name='numberObjectValue'
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


const mapStateToProps = state => ({
    ...state.addressObject,
});
export default connect(mapStateToProps, {setStateAddress})(AddressAgreement);
