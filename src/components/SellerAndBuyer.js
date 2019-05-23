import React, { Component } from 'react';
import Parties from '../components/Parties.js';
import {setSeller, setBuyer} from '../actions/SetupeActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Column, Label, Placeholder, Wrapper} from '../components/styleComponents';

const parties = (e, arr, party) => {
    let name = e.target.name + party;
    let value = typeof(e) !== 'string' ? e.target.value : e;

    if (name === 'registrationNumber' + party){
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

class SellerAndBuyer extends Component {
    constructor (props) {
        super(props);

        let seller = this.props.seller;
        let buyer = this.props.buyer;

        this.state = {
            nameSeller: seller.nameSeller,
            registrationNumberSeller: seller.registrationNumberSeller,
            addressSeller: seller.addressSeller,
            statementSeller: seller.statementSeller,
            nameBuyer: buyer.nameBuyer,
            registrationNumberBuyer:buyer.registrationNumberBuyer,
            addressBuyer:buyer.addressBuyer,
            statementBuyer:buyer.statementBuyer,

        };
    }

    handleChangeInputSeller = e => {
        let seller = parties(e, this.state, 'Seller');
        this.setState({[seller[0]]:seller[1]}, () => {this.props.setSeller(seller[2])});

        if(e.target.name === 'name' && e.target.value.indexOf(' ') !== -1){

            fetch('http://lolololo.zzz.com.ua', {
                method: 'POST',
                body: JSON.stringify({
                    action: 'gender',
                    name: e.target.value,
                }),
                cache: 'no-cache',
            })
                .then(response => {
                    response.json().then(data => {
                        console.log(data.name);
                    });
                });
        }
    };

    handleChangeInputBuyer = e => {
        let buyer = parties(e, this.state, 'Buyer');
        this.setState({[buyer[0]]:buyer[1]}, () => {this.props.setBuyer(buyer[2])});
    };

    render() {
        const { nameSeller, registrationNumberSeller, chooseMorWSeller, addressSeller, statementSeller,nameBuyer, registrationNumberBuyer, chooseMorWBuyer, addressBuyer, statementBuyer} = this.state;

        return (
            <Wrapper>
                <Column>
                    <Parties
                        name={nameSeller}
                        handleChangeInput={this.handleChangeInputSeller}
                        registrationNumber={registrationNumberSeller}
                        chooseMorW={chooseMorWSeller}
                        address={addressSeller}
                        NameParties = "Продавець"
                    />
                    <Label>
                        <Placeholder>Заява-згода</Placeholder>
                        <input
                            type="checkbox"
                            name="statementSeller"
                            onChange={this.handleChangeInputSeller}
                            value = {statementSeller}
                        />
                    </Label>
                </Column>
                <Column>
                    <Parties
                        name={nameBuyer}
                        handleChangeInput={this.handleChangeInputBuyer}
                        registrationNumber={registrationNumberBuyer}
                        chooseMorW = {chooseMorWBuyer}
                        address={addressBuyer}
                        NameParties = "Покупець"
                    />
                    <Label>
                        <Placeholder>Заява-згода</Placeholder>
                        <input
                            type="checkbox"
                            name="statement"
                            onChange={this.handleChangeInputBuyer}
                            value = {statementBuyer}
                        />
                    </Label>
                </Column>
            </Wrapper>
        );
    }
}


SellerAndBuyer.propTypes = {
    seller:PropTypes.object.isRequired,
    setSeller:PropTypes.func.isRequired,
    buyer:PropTypes.object.isRequired,
    setBuyer: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    ...state.parties,
});

export default connect(mapStateToProps, {setSeller,setBuyer})(SellerAndBuyer);