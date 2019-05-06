import React, { Component } from 'react';

import { TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import './react-tabs-style.css';
import Parties from '../components/Parties.js';

import {setSeller} from '../actions/SetupeActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const parties = (e, arr, party) => {
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
};

class Seller extends Component {
    constructor (props) {
        super(props);

        let seller = this.props.seller;

        this.state = {
            nameSeller: seller.nameSeller,
            registrationNumberSeller: seller.registrationNumberSeller,
            chooseMorWSeller: seller.chooseMorWSeller,
            addressSeller: seller.addressSeller,
            statementSeller:seller.statementSeller,
        };
    }

    handleChangeInputSeller = e => {
        let seller = parties(e, this.state, 'Seller');
        this.setState({[seller[0]]:seller[1]}, () => {this.props.setSeller(seller[2])});
    };


    render() {
        const { nameSeller, registrationNumberSeller, chooseMorWSeller, addressSeller, statementSeller} = this.state;

        return (
                <div>
                        <Parties
                            name={nameSeller}
                            handleChangeInput={this.handleChangeInputSeller}
                            registrationNumber={registrationNumberSeller}
                            chooseMorW={chooseMorWSeller}
                            address={addressSeller}
                            NameParties = "Продавець"
                        />
                        <div>
                            Заява-згода
                            <input
                                type="checkbox"
                                name="statementSeller"
                                onChange={this.handleChangeInputSeller}
                                value = {statementSeller}
                            />
                        </div>
                </div>
        );
    }
}


Seller.propTypes = {
    seller:PropTypes.object.isRequired,
    setSeller:PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    ...state.parties,
});

export default connect(mapStateToProps, {setSeller})(Seller);