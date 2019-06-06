import React, { Component } from 'react';
import Select from 'react-select';
import {docsSellerName, orderObjects} from '../components/data/orders.js';
import { connect } from 'react-redux';
import { setDocSeller} from '../store/actions/SetupeActions';
import {Wrapper, Column, Row, Label, Input, Placeholder, styleSelectMenu, colorOptions} from '../styleComponents/styleComponents';

class DocsSeller extends Component {
    constructor (props) {
        super(props);

          let d = this.props.docSeller;

          this.state = {
            name:d.name,
            type:d.type,
            issuedOn:d.issuedOn,
            issuedBy:d.issuedBy,
            indexNumbers:d.indexNumbers,
            registryName:d.registryName,
            registryIssuedOn:d.registryIssuedOn,
            registryIndexNumbers:d.registryIndexNumbers,
        };
    }
    onInputChange = (inputValue)=> {
        const target =inputValue.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value}, () => this.props.setDocSeller({[name]: value}));
    };

    handleSelected = (InputValue, name) => {
        this.setState({ [name.name]: InputValue}, () => this.props.setDocSeller({ [name.name]: InputValue}));
    };

  render() {
    const {name, type, issuedOn, issuedBy,
        indexNumbers, registryName, registryIssuedOn, registryIndexNumbers} = this.state;
    return (
      <Wrapper>
          <Column>
          <Label>
            <Placeholder>Назва документа:</Placeholder>
            <Select
                name="name"
                value={name}
                onChange={this.handleSelected}
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
                    onChange={this.handleSelected}
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

const mapStateToProps = state => ({
    ...state.docSeller,
});
export default connect(mapStateToProps, { setDocSeller })(DocsSeller);
