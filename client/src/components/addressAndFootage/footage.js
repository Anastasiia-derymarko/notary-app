import React, { Component } from 'react';
import {Label, Placeholder, Row, Input} from '../../styleComponents/styleComponents';
import { Mutation } from 'react-apollo';
import { UPDATE_CONTRACT } from '../../api/mutation';

class Footage extends Component{

    constructor(props) {
        super(props);
        let footage = this.props.contract;

        this.state = {
            numberOfRooms: footage.numberOfRooms,
            totalArea: footage.totalArea,
            livingArea: footage.livingArea,
        }
    }
    onInputChange = event => {
        const name = event.target.name;
        let value = event.target.value;

        if (name === 'numberOfRooms') {
            value = event.target.validity.valid ? event.target.value : this.state.numberOfRooms;
        }

        this.setState({[name]: value});
    };
    onBluer = (e, mutate) => {
        let value = e.target.value;
        let name = e.target.name;

        mutate({
            variables:
                {
                    input:{
                        addressAndFootage : {
                            [name]:value
                        }
                    }
                }
        })

    };
    render(){
        const {numberOfRooms,totalArea, livingArea} = this.state;

        return (
            <Mutation
                mutation={ UPDATE_CONTRACT }
                variables={{id:1}}>

                {(mutate) =>(
                    <Row>
                        <Label size="15%">
                            <Placeholder>кімнат</Placeholder>
                            <Input
                                pattern="[0-9]*"
                                name = 'numberOfRooms'
                                value={numberOfRooms}
                                onChange={this.onInputChange}
                                onBlur={(e) => this.onBluer(e, mutate)}
                            />
                        </Label>
                        <Label size="35%">
                            <Placeholder>загальна площа</Placeholder>
                            <Input
                                pattern="[0-9]*"
                                name = 'totalArea'
                                value={totalArea}
                                onChange={this.onInputChange}
                                onBlur={(e) => this.onBluer(e, mutate)}
                            />
                        </Label>
                        <Label size="35%">
                            <Placeholder>житлова площа</Placeholder>
                            <Input
                                pattern="[0-9]*"
                                name = 'livingArea'
                                value={livingArea}
                                onChange={this.onInputChange}
                                onBlur={(e) => this.onBluer(e, mutate)}
                            />
                        </Label>
                    </Row>
                )}
            </Mutation>
        )
    }
}
export default (Footage);