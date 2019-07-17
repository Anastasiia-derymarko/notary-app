import React, { Component } from 'react';
import Parties from '../components/Parties.js';
import {setSeller, setBuyer} from '../store/actions/SetupeActions';
import { connect } from 'react-redux';
import {Column, Label, Placeholder, Wrapper} from '../styleComponents/styleComponents';
import { UPDATE_CONTRACT } from '../api/mutation';
import { Mutation } from 'react-apollo';
const _ = require('lodash');

class SellerAndBuyer extends Component {
    constructor (props) {
        super(props);

        this.state = {
            Seller: this.props.contract[0],
            Buyer: this.props.contract[1],
        };
    }

    handleChangeInput = (e, id, mutate) => {
        let name = e.target.name;
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        const party = _.findKey(this.state, (o) => {
            if(o.id === id){
                return o;
            }
        });
        if (e.target.type === 'checkbox'){
            mutate({
                variables:
                    {
                        input:{
                            participant: {
                                id:id,
                                [name]:value
                            }
                        }
                    }
            })
        }
        this.setState({[party]:{...this.state[party], [name]:value}});

    };

    handlerOnBlur = (e, id, mutate) => {
        let name = e.target.name;
        let value = e.target.type !== 'checkbox' ? e.target.value : !!e.target.checked ;

        mutate({
            variables:
                {
                    input:{
                        participant: {
                            id:id,
                            [name]:value
                        }
                    }
                }
        })
    };

    render() {
        const s = this.state.Seller;
        const b = this.state.Buyer;

        return (
            <Mutation
                mutation={ UPDATE_CONTRACT }
                variables={{id:1}}>

                {(mutate) =>(
                    <Wrapper>
                        <Column>
                            <Parties
                                name={s.name}
                                registrationNumber={s.registrationNumber}
                                address={s.address}
                                NameParties="Продавець"
                                party="Seller"
                                handleChangeInput={(e) => this.handleChangeInput(e, s.id)}
                                handlerOnBlur = {(e) => this.handlerOnBlur(e, s.id, mutate)}
                            />
                            <Label>
                                <Placeholder>Заява-згода</Placeholder>
                                <input
                                    type="checkbox"
                                    name="statement"
                                    onChange={(e) => {this.handleChangeInput(e, s.id, mutate)}}
                                    checked = {s.statement}
                                />
                            </Label>
                        </Column>
                        <Column>
                            <Parties
                                name={b.name}
                                registrationNumber={b.registrationNumber}
                                address={b.address}
                                NameParties = "Покупець"
                                party="Buyer"
                                handleChangeInput={(e) => this.handleChangeInput(e, b.id)}
                                handlerOnBlur = {(e) => this.handlerOnBlur(e, b.id,mutate)}
                            />
                            <Label>
                                <Placeholder>Заява-згода</Placeholder>
                                <input
                                    type="checkbox"
                                    name="statement"
                                    onChange={(e) => this.handleChangeInput(e, b.id, mutate)}
                                    checked={b.statement}
                                />
                            </Label>
                        </Column>
                    </Wrapper>
                )}
            </Mutation>
        );
    }
}

const mapStateToProps = state => ({
    ...state.parties,
});

export default connect(mapStateToProps, {setSeller,setBuyer})(SellerAndBuyer);