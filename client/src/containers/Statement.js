import React, { Component } from 'react';
import Parties from '../components/Parties.js';
import { connect } from 'react-redux';
import Select from 'react-select';
import { statementDoc } from '../components/data/orders';
import StatementToPrint from '../components/StatementToPrint';
import {Wrapper, Column, Row, Label, Placeholder, Input, colorOptions, styleSelectMenu} from '../styleComponents/styleComponents';
import ReactToPrint from 'react-to-print';
import {GenderQuery, NameCase} from '../api/query';
import { UPDATE_CONTRACT } from '../api/mutation';
import { Mutation } from 'react-apollo';

class Statement extends Component {
    constructor (props) {
        super(props);

        let statement = this.props.contract.participant;
        for (let i = 0; i < statement.length; i++){
            if (statement[i].memberType === "Statement"){
                statement = statement[i]
            }
        }

        let doc = this.props.contract.document;
        let marriageCertificate;
        for (let i=0; i < doc.length; i++){
            if (doc[i].participantId == statement.linkById){
                marriageCertificate = doc[i];
            }
        }

        let statementContract;
        for (let i=0; i < doc.length; i++){
            if (doc[i].participantId == statement.id){
                statementContract = doc[i];
            }
        }

        this.state = {
            statement,
            marriageCertificate,
            statementContract,
        }
    }

    async componentDidMount()
    {
        // const name = await NameCase(this.state.name);
        // this.setState({name});
        //
        // const buyer = this.state.nameBuyer;

        // NameCase(buyer).then(name => this.setState({nameBuyer: name}));
        // NameCase(this.state.name).then(name => this.setState({nameCase: name[1]}));
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
                        <Label>
                            <Placeholder>Свідоцтво</Placeholder>
                            <Select
                                name="name"
                                value={cert.name}
                                onChange={(e,nameSelect) => this.handleChangeInput(e, 'marriageCertificate', mutate, nameSelect)}
                                options={statementDoc}
                                placeholder=""
                                isSearchable={false}
                                isClearable={true}
                                theme={colorOptions}
                                styles={styleSelectMenu}
                            />
                        </Label>
                        <Row>
                            <Label size="40%">
                                <Placeholder>Серія, номер</Placeholder>
                                <Input
                                    type="text"
                                    name="seriesNumber"
                                    value={cert.seriesNumber}
                                    onChange={(e) => this.handleChangeInput(e, 'marriageCertificate')}
                                    onBlur = {(e) => this.handlerOnBlur(e, cert.id, mutate, false)}
                                />
                            </Label>
                            <Label size="20%">
                                <Placeholder>а/запис</Placeholder>
                                <Input
                                    type="text"
                                    name="indexNumbers"
                                    value={cert.indexNumbers}
                                    onChange={(e) => this.handleChangeInput(e, 'marriageCertificate')}
                                    onBlur = {(e) => this.handlerOnBlur(e, cert.id, mutate, false)}
                                />
                            </Label>
                            <Label size="32%">
                                <Placeholder>Дата видачі</Placeholder>
                                <Input
                                    type="date"
                                    name="issuedOn"
                                    value={cert.issuedOn}
                                    onChange={(e) => this.handleChangeInput(e, 'marriageCertificate')}
                                    onBlur = {(e) => this.handlerOnBlur(e, cert.id, mutate, false)}
                                />
                            </Label>
                        </Row>
                        <Label>
                            <Placeholder>Видавник</Placeholder>
                            <Input
                                type="text"
                                name="issuedBy"
                                value={cert.issuedBy}
                                onChange={(e) => this.handleChangeInput(e, 'marriageCertificate')}
                                onBlur = {(e) => this.handlerOnBlur(e, cert.id, mutate, false)}
                            />
                        </Label>
                        <Row>
                            <Label size="65%">
                                <Placeholder>Нотаріус</Placeholder>
                                <Input
                                    type="text"
                                    name="issuedBy"
                                    value={contr.issuedBy}
                                    onChange={(e) => this.handleChangeInput(e, 'statementContract')}
                                    onBlur = {(e) => this.handlerOnBlur(e, contr.id, mutate, false)}
                                />
                            </Label>
                            <Label size="32%">
                                <Placeholder>Дата</Placeholder>
                                <Input
                                    type="date"
                                    name="issuedOn"
                                    value={contr.issuedOn}
                                    onChange={(e) => this.handleChangeInput(e, 'statementContract')}
                                    onBlur = {(e) => this.handlerOnBlur(e, contr.id, mutate, false)}
                                />
                            </Label>
                        </Row>
                        </Column>
                        <Column>
                            <ReactToPrint
                                trigger={() => <button>Print</button>}
                                content={() => this.componentRef}
                            />
                            {/*<StatementToPrint
                                ref={el => (this.componentRef = el)}
                                name={name}
                                nameCase={nameCase}
                                registrationNumber={registrationNumber}
                                address={address}
                                nameDoc={nameDoc}
                                serieNumber={serieNumber}
                                issuedBy={issuedBy}
                                issuedOn={issuedOn}
                                registerNumber={registerNumber}
                                dateStatement={dateStatement}
                                nameNotary={nameNotary}
                                buyer={buyer}
                                nameBuyer={nameBuyer}
                                gender={genderParty}
                            />*/}
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