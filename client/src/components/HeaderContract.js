import React, { Component } from 'react';
import {Label, Placeholder, styleSelectMenu, Row, Input, colorOptions} from '../styleComponents/styleComponents';
import { orderTypes, orderObjects } from '../components/data/orders.js';
import Select from 'react-select';
import { Mutation } from 'react-apollo';
import { UPDATE_CONTRACT } from '../api/mutation';

class HeaderContract extends Component {
    constructor(props) {
        super(props);

        const {contractType, object, data} = this.props.initialValues;
        this.state = {
            contractType: contractType,
            object: object,
            data: data,
            inputType: 'text',
        }
    }

    handleOnInputChange = (e, nameSelect, mutate) => {
        let value, name;

        if (e === null || !e.target) {
            //select null or true
            value = e;
            name = nameSelect.name;

            mutate({
                variables:
                    {
                        input:{
                            [name]:value
                        }
                    }
            })
        } else {
            // input data
            value = e.target.value;
            name = e.target.name;
        }
        this.setState({[name]: value});
    };

    onFocus = () => {
        this.setState({inputType: 'date'});
    };
    onBluer = (e, mutate) => {
        let value = e.target.value;
        let name = e.target.name;

        this.setState({inputType: 'text'});

        mutate({
            variables:
                {
                    input:{
                        [name]:value
                    }
                }
        })

    };

    render() {
        const {contractType, object, data, inputType} = this.state;
        return (
            <Mutation
                mutation={ UPDATE_CONTRACT }
                variables={{id:2}}
            >
                {(mutate) =>(
                    <div>
                        <Label>
                            <Placeholder>Тип угоди</Placeholder>
                            <Select
                                name="contractType"
                                value={contractType}
                                onChange={(val, name) => this.handleOnInputChange(val,name,mutate)}
                                options={orderTypes}
                                placeholder=""
                                isSearchable={false}
                                isClearable={true}
                                theme={colorOptions}
                                styles={styleSelectMenu}
                            />
                        </Label>
                        <Row>
                            <Label size='47%'>
                                <Placeholder>Об'єкт угоди</Placeholder>
                                <Select
                                    name="object"
                                    placeholder=""
                                    value={object}
                                    onChange={(val, name) => this.handleOnInputChange(val,name,mutate)}
                                    options={orderObjects}
                                    isClearable={true}
                                    isSearchable={false}
                                    theme={colorOptions}
                                    styles={styleSelectMenu}
                                />
                            </Label>
                            <Label size='47%'>
                                <Placeholder>Дата угоди</Placeholder>
                                <Input
                                    name="data"
                                    type={inputType}
                                    value={data}
                                    onFocus={this.onFocus}
                                    onBlur={(e) => this.onBluer(e, mutate)}
                                    onChange={this.handleOnInputChange}
                                />
                            </Label>
                        </Row>
                    </div>
                )}
            </Mutation>
        )
    }
}

export default (HeaderContract);