import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFootage } from '../../actions/SetupeActions';

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

        if (name == 'numberOfRooms') {
            value = event.target.validity.valid ? event.target.value : this.state.numberOfRooms;
        }

        this.setState({[name]: value}, () => this.props.setFootage(this.state));
    };

    render(){
        const {numberOfRooms,totalArea, livingArea} = this.state;

        return (
            <div>
                <label>кількість кімнат
                    <input
                        pattern="[0-9]*"
                        name = 'numberOfRooms'
                        value={numberOfRooms}
                        onChange={this.onInputChange}
                    />
                </label>
                <label>загальна площа
                    <input
                        pattern="[0-9]*"
                        name = 'totalArea'
                        value={totalArea}
                        onChange={this.onInputChange}
                    />
                </label>
                <label>житлова площа
                    <input
                        pattern="[0-9]*"
                        name = 'livingArea'
                        value={livingArea}
                        onChange={this.onInputChange}
                    />
                </label>
            </div>
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