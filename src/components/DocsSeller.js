import React, { Component } from 'react';
import '../components/style/DocsSeller.css';

import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {docsSellerName, orderObjects} from '../data/orders.js';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setDocSeller} from '../actions/SetupeActions';

class DocsSeller extends Component {
  constructor (props) {
    super(props);

      let docSeller = this.props.docSeller;

      this.state = {
        name:docSeller.name,
        type:docSeller.type,
        issuedOn:docSeller.issuedOn,
        issuedBy:docSeller.issuedBy,
        indexNumbers:docSeller.indexNumbers,
        registryName:docSeller.registry.name,
        registryIssuedOn:docSeller.registry.issuedOn,
        registryIndexNumbers:docSeller.registry.indexNumbers,
    };
  }
    onInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value}, () => this.props.setDocSeller(this.state));
    };

    handleDocTypeNameChange = selectedOption => {
      this.setState({ name: selectedOption ? selectedOption.value : null }, () => this.props.setDocSeller(this.state));
    };

    handleDocObjTypeChange = selectedOption => {
      this.setState({ type: selectedOption ? selectedOption.value : null }, () => this.props.setDocSeller(this.state));
    };

  render() {

    const {name, type, issuedOn, issuedBy,
        indexNumbers, registryName, registryIssuedOn, registryIndexNumbers} = this.state

    return (
      <div>
        <div className = "row" style = {{marginRight: "10px"}}>
        <div className = "column">
          <label>
          <span>Назва документа:</span>
           <Select 
             value={name}
             onChange={this.handleDocTypeNameChange}
             options={docsSellerName}
           />
           </label>
           <label>
           <span>Доповнення:</span>
           <Select 
             value={type}
             onChange={this.handleDocObjTypeChange}
             options={orderObjects}
           /> 
           </label>
            <div className = "row">
              <label style = {{width: "75%"}} >Дата
              <input
                type="date"
                name="issuedOn"
                value= {issuedOn}
                onChange = {this.onInputChange}
              />
              </label>
              <label style = {{width: "25%"}} >№ 
              <input
                name = 'indexNumbers'
                value={indexNumbers}
                onChange={this.onInputChange || ''}
              />
              </label>
            </div>
            <label>
            <span>Ким виданий:</span>
            <input 
              name = 'issuedBy'
              value={issuedBy}
              onChange={this.onInputChange || ''}
            />
            </label>

            </div>
            <div className = "column">
              <label>
              <span>Назва реєстра:</span>
              <input 
                name = 'registryName'
                value={registryName}
                onChange={this.onInputChange || ''}
              />
              </label>
              <div className = "row">
                 <label style = {{width: "75%"}}>Дата
                <input
                    type="date"
                    name="registryIssuedOn"
                    value= {registryIssuedOn}
                    onChange = {this.onInputChange}
                />
                </label>
                <label style = {{width: "25%"}}><span>№ </span>
                <input
                name = 'registryIndexNumbers'
                value={registryIndexNumbers}
                onChange={this.onInputChange || ''}         
                />
                </label>
              </div>
            </div>
          </div> 
            <div className = "row" style={{marginRight: "10px"}}> 
            <button onClick = {() => this.props.setDocSeller(this.state)}>+ Додати документ</button>
            </div>  
      </div>
    )
  }      
}

DocsSeller.propTypes = {
    setDocSeller: PropTypes.func.isRequired,
    docSeller:PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    ...state.docSeller,
});
export default connect(mapStateToProps, { setDocSeller })(DocsSeller);
