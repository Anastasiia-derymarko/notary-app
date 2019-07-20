import React, { Component } from 'react';
import {docsSellerName, orderObjects} from '../components/data/orders.js';
import { connect } from 'react-redux';
import { setDocSeller} from '../store/actions/SetupeActions';
import {Wrapper, Column, Row, Label, Input, Placeholder} from '../styleComponents/styleComponents';
import { UPDATE_CONTRACT } from '../api/mutation';
import { Mutation } from 'react-apollo';
import Document from '../components/Document';
const _ = require('lodash');

class DocsSeller extends Component {
    constructor (props) {
        super(props);

        const sellerId = this.props.participant[_.findIndex(this.props.participant, _.matches({memberType:"Seller"}))].id;
        const SellerDoc = this.props.contract[_.findIndex(this.props.contract, _.matches({participantId: sellerId, linkById: null}))];
        const registryDoc = this.props.contract[_.findIndex(this.props.contract, _.matches({participantId: sellerId, linkById: SellerDoc.id}))];

        this.state = {
            SellerDoc,
            registryDoc
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
        this.setState({SellerDoc:{...this.state.SellerDoc, [name]:val}});

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

    const d = this.state.SellerDoc;
    const r = this.state.registryDoc;

        return (
            <Mutation
                mutation={ UPDATE_CONTRACT }
                variables={{id:1}}>

                {(mutate) =>(
                    <Wrapper>
                      <Column>
                          <Document
                              name={d.name}
                              optionsName={docsSellerName}
                              type={d.type}
                              optionsType={orderObjects}
                              issuedOn={d.issuedOn}
                              issuedBy={d.issuedBy}
                              indexNumbers={d.indexNumbers}
                              indexNumbersText="№"
                              handleChangeInput={(val, name) => this.handleOnInputChange(val, name, mutate, d.id)}
                              onBlur={(e) => this.onBlur(e, mutate, d.id)}
                          />
                      </Column>
                      <Column>
                          <p>БТІ</p>
                          <Document
                              issuedOn={r.issuedOn}
                              issuedBy={r.issuedBy}
                              indexNumbers={r.indexNumbers}
                              indexNumbersText="№"
                              handleChangeInput={(val, name) => this.handleOnInputChange(val, name, mutate, d.id)}
                              onBlur={(e) => this.onBlur(e, mutate, d.id)}
                          />
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
