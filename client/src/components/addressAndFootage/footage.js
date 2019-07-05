import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFootage } from '../../store/actions/SetupeActions';
import {Label, Placeholder, Row, Input} from '../../styleComponents/styleComponents';

class Footage extends Component{

    constructor(props) {
        super(props);
        let footage = this.props.footage;

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

        this.setState({[name]: value}, () => this.props.setFootage(this.state));
    };

    render(){
        const {numberOfRooms,totalArea, livingArea} = this.state;

        return (
            <Row>
                <Label size="15%">
                    <Placeholder>кімнат</Placeholder>
                    <Input
                        pattern="[0-9]*"
                        name = 'numberOfRooms'
                        value={numberOfRooms}
                        onChange={this.onInputChange}
                    />
                </Label>
                <Label size="35%">
                    <Placeholder>загальна площа</Placeholder>
                    <Input
                        pattern="[0-9]*"
                        name = 'totalArea'
                        value={totalArea}
                        onChange={this.onInputChange}
                    />
                </Label>
                <Label size="35%">
                    <Placeholder>житлова площа</Placeholder>
                    <Input
                        pattern="[0-9]*"
                        name = 'livingArea'
                        value={livingArea}
                        onChange={this.onInputChange}
                    />
                </Label>
            </Row>
        )
    }
}

Footage.propTypes = {
    setFootage: PropTypes.func.isRequired,
    footage: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    ...state.addressObject,
});

export default connect (mapStateToProps, {setFootage})(Footage);