import React, { Component } from 'react';
import Parties from '../components/Parties.js';
import {setSeller, setBuyer} from '../store/actions/SetupeActions';
import { connect } from 'react-redux';
import {Column, Label, Placeholder, Wrapper} from '../styleComponents/styleComponents';

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

    handleChangeInput = e => {
        let name = e.target.name;
        let value = typeof(e) !== 'string' ? e.target.value : e;
        console.log({[name]: value});
        this.setState({[name]: value}, () => {
            if(name.indexOf('Seller') != -1){
                this.props.setSeller({[name]: value})
            }else{
                this.props.setBuyer({[name]: value})
            }
        });
    };

    render() {
        const { nameSeller, registrationNumberSeller, addressSeller, statementSeller,nameBuyer, registrationNumberBuyer, addressBuyer, statementBuyer} = this.state;

        return (
            <Wrapper>
                <Column>
                    <Parties
                        name={nameSeller}
                        registrationNumber={registrationNumberSeller}
                        address={addressSeller}
                        NameParties = "Продавець"
                        party="Seller"
                        handleChangeInput={this.handleChangeInput}
                    />
                    <Label>
                        <Placeholder>Заява-згода</Placeholder>
                        <input
                            type="checkbox"
                            name="statementSeller"
                            onChange={this.handleChangeInput}
                            value = {statementSeller}
                        />
                    </Label>
                </Column>
                <Column>
                    <Parties
                        name={nameBuyer}
                        registrationNumber={registrationNumberBuyer}
                        address={addressBuyer}
                        NameParties = "Покупець"
                        party="Buyer"
                        handleChangeInput={this.handleChangeInput}
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

const mapStateToProps = state => ({
    ...state.parties,
});

export default connect(mapStateToProps, {setSeller,setBuyer})(SellerAndBuyer);