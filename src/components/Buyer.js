import React, { Component } from 'react';
import Parties from '../components/Parties.js';
import {setBuyer } from '../actions/SetupeActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function parties (e, arr, party){
    let name = typeof(e) !== 'string' ? e.target.name + party: 'chooseMorW' + party;
    let value = typeof(e) !== 'string' ? e.target.value : e;

    if (name == 'registrationNumber' + party){
        value = value.replace(/\D/,'');
    }
    let buyer = {};

    for (let key in arr){
        if(key.indexOf(party) !== -1){
            buyer[key] = arr[key];
        }

    }
    return [name,value,buyer]
}

class Buyer extends Component {
    constructor (props) {
        super(props);

        let buyer = this.props.buyer;

        this.state = {
            nameBuyer:  buyer.nameBuyer,
            registrationNumberBuyer:buyer.registrationNumberBuyer,
            chooseMorWBuyer: buyer.chooseMorWBuyer,
            addressBuyer:buyer.addressBuyer,
            statementBuyer:buyer.statementBuyer,
        };
    }

    handleChangeInputBuyer = e => {
        let buyer = parties(e, this.state, 'Buyer');
        this.setState({[buyer[0]]:buyer[1]}, () => {this.props.setBuyer(buyer[2])});
    };
    render() {
        const { nameBuyer, registrationNumberBuyer, chooseMorWBuyer, addressBuyer, statementBuyer} = this.state;

        return (
                    <div>
                        <Parties
                            name={nameBuyer}
                            handleChangeInput={this.handleChangeInputBuyer}
                            registrationNumber={registrationNumberBuyer}
                            chooseMorW = {chooseMorWBuyer}
                            address={addressBuyer}
                            NameParties = "Покупець"
                        />
                        <div>
                            Заява-згода
                            <input
                                type="checkbox"
                                name="statement"
                                onChange={this.handleChangeInputBuyer}
                                value = {statementBuyer}
                            />
                        </div>
                    </div>
        );
    }
}


Buyer.propTypes = {
    buyer:PropTypes.object.isRequired,
    setBuyer: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    ...state.parties,
});

export default connect(mapStateToProps, {setBuyer})(Buyer);