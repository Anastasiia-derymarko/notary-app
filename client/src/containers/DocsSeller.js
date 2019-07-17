import React, { Component } from 'react';
import Select from 'react-select';
import {docsSellerName, orderObjects} from '../components/data/orders.js';
import { connect } from 'react-redux';
import { setDocSeller} from '../store/actions/SetupeActions';
import {Wrapper, Column, Row, Label, Input, Placeholder, styleSelectMenu, colorOptions} from '../styleComponents/styleComponents';
import { UPDATE_CONTRACT } from '../api/mutation';
import { Mutation } from 'react-apollo';

class DocsSeller extends Component {
    constructor (props) {
        super(props);

          const doc = this.props.contract[0];

          this.state = {
              doc,
        };
    }
    handleOnInputChange = (val, name, mutate, id) => {

        if (val === null || !val.target) {
            //select null or true
            name = name.name;
            mutate({
                variables:
                    {
                        input:{
                            document:{
                                id: id,
                                [name]:val
                            }
                        }
                    }
            })
        } else {
            // input data
            name = val.target.name;
            val = val.target.value;
        }
        this.setState({doc:{...this.state.doc, [name]:val}});

    };

    onBlur = (e, mutate, id) => {
        let value = e.target.value;
        let name = e.target.name;

        mutate({
            variables:
                {
                    input:{
                        document: {
                            id:id,
                            [name]:value
                        }
                    }
                }
        })

    };

    render() {

    const d = this.state.doc;

        return (
            <Mutation
                mutation={ UPDATE_CONTRACT }
                variables={{id:1}}>

                {(mutate) =>(
                    <Wrapper>
                      <Column>
                      <Label>
                        <Placeholder>Назва документа:</Placeholder>
                        <Select
                            name="name"
                            value={d.name}
                            options={docsSellerName}
                            onChange={(val, name) => this.handleOnInputChange(val, name, mutate, d.id)}
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
                                value={d.type}
                                options={orderObjects}
                                onChange={(val, name) => this.handleOnInputChange(val, name, mutate, d.id)}
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
                                value= {d.issuedOn}
                                onChange = {this.handleOnInputChange}
                                onBlur = {(e) => this.onBlur(e, mutate, d.id)}
                            />
                          </Label>
                          <Label size="15%">
                              <Placeholder>№</Placeholder>
                              <Input
                                name = 'indexNumbers'
                                value={d.indexNumbers}
                                onChange={this.handleOnInputChange}
                                onBlur = {(e) => this.onBlur(e, mutate, d.id)}
                              />
                              </Label>
                        </Row>
                        <Label>
                        <Placeholder>Ким виданий:</Placeholder>
                        <Input
                          name = 'issuedBy'
                          value={d.issuedBy}
                          onChange={this.handleOnInputChange}
                          onBlur = {(e) => this.onBlur(e, mutate, d.id)}
                        />
                        </Label>
                      </Column>
                      <Column>
                          <Label>
                            <Placeholder>Назва реєстра / БТІ:</Placeholder>
                              <Input
                                name = 'registryName'
                                value={d.registryName}
                                onChange={this.handleOnInputChange}
                                onBlur = {(e) => this.onBlur(e, mutate, d.id)}
                              />
                          </Label>
                          <Row>
                             <Label size="32%">
                                <Placeholder>Дата</Placeholder>
                                <Input
                                    type="date"
                                    name="registryIssuedOn"
                                    value= {d.registryIssuedOn}
                                    onChange = {this.handleOnInputChange}
                                    onBlur = {(e) => this.onBlur(e, mutate, d.id)}
                                />
                            </Label>
                            <Label size="15%" style={{margin:'0 auto 0 2%'}}>
                                <Placeholder>№ </Placeholder>
                                <Input
                                    name = 'registryIndexNumbers'
                                    value={d.registryIndexNumbers}
                                    onChange={this.handleOnInputChange}
                                    onBlur = {(e) => this.onBlur(e, mutate, d.id)}
                                />
                            </Label>
                          </Row>
                      </Column>
                    </Wrapper>
                )}
            </Mutation>
        )
    }
}

const mapStateToProps = state => ({
    ...state.docSeller,
});
export default connect(mapStateToProps, { setDocSeller })(DocsSeller);
