import React, { Component } from 'react';
import Parties from '../components/Parties.js';
import { connect } from 'react-redux';
import { statementDoc } from '../components/data/orders';
import StatementToPrint from '../components/StatementToPrint';
import {Wrapper, Column} from '../styleComponents/styleComponents';
import ReactToPrint from 'react-to-print';
// import {GenderQuery, NameCase} from '../api/query';
import { UPDATE_CONTRACT } from '../api/mutation';
import { Mutation } from 'react-apollo';
import Document from '../components/Document'
const _ = require('lodash');


class Statement extends Component {
    constructor (props) {
        super(props);

        const d = this.props.contract.document;
        const p = this.props.participant;

        const statement = p[_.findIndex(p, _.matchesProperty('memberType', 'Statement'))];
        const marriageCertificate = d[_.findIndex(d, _.matchesProperty('participantId', statement.linkById))];
        const statementContract = d[_.findIndex(d, _.matchesProperty('participantId', statement.id))];

        this.state = {
            statement,
            marriageCertificate,
            statementContract,
            nameCase: null
        }
    }

    async componentDidMount()
    {
        // const name = await NameCase(this.state.statement.name);
        // this.setState({nameCase:name});
        //
        // const buyer = this.state.nameBuyer;
        //
        // NameCase(buyer).then(name => this.setState({nameBuyer: name}));
        // NameCase(this.state.statement.name).then(name => this.setState({nameCase: name[1]}));
        // GenderQuery(buyer).then(name => this.setState({genderParty:name}));
    }

    handleChangeInput = (e, nameInState, mutate, nameSelect) => {
        let name, value;
        //input text, data if(!nameSelect) == true
        if(!nameSelect) {
            name = e.target.name;
            value = e.target.value;
        //Select
        }else{
            name = nameSelect.name;
            value = e;
            mutate({
                variables:
                    {
                        input:{
                            document: {
                                id:this.state[nameInState].id,
                                [name]:value
                            }
                        }
                    }
            })
        }

        this.setState({[nameInState]:{...this.state[nameInState], [name]:value}});

    };

    handlerOnBlur = (e, id, mutate, ifMen) => {
        let name = e.target.name;
        let value = e.target.value;
        let tableName = ifMen ? 'participant' : 'document';

        mutate({
            variables:
                {
                    input:{
                        [tableName]: {
                            id:id,
                            [name]:value
                        }
                    }
                }
        })
    };

    render(){
        const men = this.state.statement;
        const cert = this.state.marriageCertificate;
        const contr = this.state.statementContract;

        return(
            <Mutation
                mutation={ UPDATE_CONTRACT }
                variables={{id:1}}>

                {(mutate) =>(
                    <Wrapper>
                        <Column>
                        <Parties
                            name={men.name}
                            handleChangeInput={(e) => this.handleChangeInput(e, 'statement')}
                            handlerOnBlur = {(e) => this.handlerOnBlur(e, men.id, mutate, true)}
                            registrationNumber={men.registrationNumber}
                            address={men.address}
                        />
                        <Document
                            name={cert.name}
                            optionsName={statementDoc}
                            type={cert.type}
                            optionsType={statementDoc}
                            issuedOn={cert.issuedOn}
                            issuedBy={cert.issuedBy}
                            indexNumbers={cert.indexNumbers}
                            indexNumbersText="а/запис"
                            seriesNumber={cert.seriesNumber}
                            handleChangeInput={(e) => this.handleChangeInput(e, 'marriageCertificate')}
                            handlerOnBlur = {(e) => this.handlerOnBlur(e, men.id, mutate, false)}
                        />
                        <Document
                            issuedOn={contr.issuedOn}
                            issuedBy={contr.issuedBy}
                            indexNumbers={contr.indexNumbers}
                            indexNumbersText="реєстровий №"
                            handleChangeInput={(e) => this.handleChangeInput(e, 'statementContract')}
                            handlerOnBlur = {(e) => this.handlerOnBlur(e, contr.id, mutate, false)}
                        />
                        </Column>
                        <Column>

                            <ReactToPrint
                                trigger={() => <button>Print</button>}
                                content={() => this.componentRef}
                            />
                            <StatementToPrint
                                ref={el => (this.componentRef = el)}
                                name={men.name}
                                registrationNumber={men.registrationNumber}
                                address={men.address}
                                nameDoc={cert.name}
                                serieNumber={cert.seriesNumber}
                                issuedBy={cert.issuedBy}
                                issuedOn={cert.issuedOn}
                                registerNumber={cert.registerNumber}
                                dateStatement={contr.issuedOn}
                                nameNotary={contr.issuedBy}
                                buyer='Sskskkss'
                                nameBuyer="ddddd"
                                gender="sddd"
                            />
                        </Column>
                    </Wrapper>
                )}
            </Mutation>
        )
    }
}

const mapStateToProps = state => ({
    ...state.parties,
    ...state.headerOrder,
});

export default connect(mapStateToProps)(Statement);