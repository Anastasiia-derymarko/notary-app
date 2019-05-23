import React, { Component } from 'react';
import Select from 'react-select';
import {docsSellerName, orderObjects} from '../data/orders.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setDocSeller} from '../actions/SetupeActions';
import {Wrapper, Column, Row, Label, Input, Placeholder, styleSelectMenu, colorOptions} from './styleComponents';

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
      <Wrapper>
          <Column>
          <Label>
            <Placeholder>Назва документа:</Placeholder>
            <Select
                name="name"
                value={name}
                onChange={this.handleDocTypeNameChange}
                options={docsSellerName}
                placeholder=""
                isSearchable={false}
                isClearable={true}
                theme={colorOptions}
                styles={styleSelectMenu}
            />
          </Label>
            <Row>
                <Label size="50%">
                <Placeholder>Доповнення:</Placeholder>
                <Select
                    name="type"
                    value={type}
                    onChange={this.handleDocObjTypeChange}
                    options={orderObjects}
                    placeholder=""
                    isSearchable={false}
                    isClearable={true}
                    theme={colorOptions}
                    styles={styleSelectMenu}
                />
              </Label>
              <Label size="32%">
                <Placeholder>Дата</Placeholder>
                <Input
                    type="date"
                    name="issuedOn"
                    value= {issuedOn}
                    onChange = {this.onInputChange}
                    />
              </Label>
              <Label size="15%">
                  <Placeholder>№</Placeholder>
                  <Input
                    name = 'indexNumbers'
                    value={indexNumbers}
                    onChange={this.onInputChange || ''}
                  />
                  </Label>
            </Row>
            <Label>
            <Placeholder>Ким виданий:</Placeholder>
            <Input
              name = 'issuedBy'
              value={issuedBy}
              onChange={this.onInputChange || ''}
            />
            </Label>
          </Column>
          <Column>
              <Label>
                <Placeholder>Назва реєстра / БТІ:</Placeholder>
                  <Input
                    name = 'registryName'
                    value={registryName}
                    onChange={this.onInputChange || ''}
                  />
              </Label>
              <Row>
                 <Label size="32%">
                    <Placeholder>Дата</Placeholder>
                    <Input
                        type="date"
                        name="registryIssuedOn"
                        value= {registryIssuedOn}
                        onChange = {this.onInputChange}
                    />
                </Label>
                <Label size="15%" style={{margin:'0 auto 0 2%'}}>
                    <Placeholder>№ </Placeholder>
                    <Input
                        name = 'registryIndexNumbers'
                        value={registryIndexNumbers}
                        onChange={this.onInputChange || ''}
                    />
                </Label>
              </Row>
            <button onClick = {() => this.props.setDocSeller(this.state)}>+ Додати документ</button>
          </Column>
      </Wrapper>
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
