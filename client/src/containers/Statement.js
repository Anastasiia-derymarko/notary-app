import React, { Component } from 'react';
import Parties from '../components/Parties.js';
import { connect } from 'react-redux';
import Select from 'react-select';
import { statementDoc } from '../components/data/orders';
import StatementToPrint from '../components/StatementToPrint';
import {Wrapper, Column, Row, Label, Placeholder, Input, colorOptions, styleSelectMenu} from '../styleComponents/styleComponents';
import ReactToPrint from 'react-to-print';
import {GenderQuery, NameCase} from '../api/query';


class Statement extends Component {
    constructor (props) {
        super(props);

        this.state = {
            name:'Вашкулат Олег Юрійович',
            nameCase:'',
            registrationNumber:2805605055,
            address:'м. Київ, вул. Василя Яна, буд. 2, кв. 14',
            nameDoc: {label: "Свідоцтвом про одруження", value: 1},
            serieNumber:"ВК № 345654",
            registerNumber:'245/р',
            issuedOn:'2012-06-04',
            issuedBy:'відділом реєстрації актів громадянського стану Печерського районного управління юстиції міста Києва',
            nameNotary:'Климпик В.В.',
            dateStatement:'2012-04-04',
            nameBuyer:this.props.buyer.nameBuyer,
            genderParty:'',
        }
    }

    async componentDidMount()
    {
        // const name = await NameCase(this.state.name);
        // this.setState({name});
        //
        const buyer = this.state.nameBuyer;

        NameCase(buyer).then(name => this.setState({nameBuyer: name}));
        NameCase(this.state.name).then(name => this.setState({nameCase: name[1]}));
        GenderQuery(buyer).then(name => this.setState({genderParty:name}));
    }

    handleChangeInput = e => {
        let name = typeof(e) !== 'string' ? e.target.name : 'chooseMorW';
        let value = typeof(e) !== 'string' ? e.target.value : e;

        this.setState({[name]: value});
    };

    render(){
        const {name, registrationNumber, address, nameDoc, serieNumber, registerNumber, issuedBy, issuedOn, nameNotary, dateStatement, nameCase, nameBuyer, genderParty} = this.state;
        const {buyer} = this.props;
        const WifeOrHusband = genderParty !== 1 ? ['дружина', 'моїм чоловіком']: ['чоловік','моєю дружиною'];

        return(
            <Wrapper>
                <Column>
                <Parties
                    name={name}
                    handleChangeInput={this.handleChangeInput}
                    registrationNumber={registrationNumber}
                    chooseMorW = 'false'
                    address={address}
                    NameParties =  {WifeOrHusband[0] +' покупця'}
                />
                <Label>
                    <Placeholder>Свідоцтво</Placeholder>
                    <Select
                        name="nameDoc"
                        value={nameDoc}
                        onChange={this.handleChangeInput}
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
                            name="serieNumber"
                            value={serieNumber}
                            onChange={this.handleChangeInput}
                        />
                    </Label>
                    <Label size="20%">
                        <Placeholder>а/запис</Placeholder>
                        <Input
                            type="text"
                            name="registerNumber"
                            value={registerNumber}
                            onChange={this.handleChangeInput}
                        />
                    </Label>
                    <Label size="32%">
                        <Placeholder>Дата видачі</Placeholder>
                        <Input
                            type="date"
                            name="issuedOn"
                            value={issuedOn}
                            onChange={this.handleChangeInput}
                        />
                    </Label>
                </Row>
                <Label>
                    <Placeholder>Видавник</Placeholder>
                    <Input
                        type="text"
                        name="issuedBy"
                        value={issuedBy}
                        onChange={this.handleChangeInput}
                    />
                </Label>
                <Row>
                    <Label size="65%">
                        <Placeholder>Нотаріус</Placeholder>
                        <Input
                            type="text"
                            name="nameNotary"
                            value={nameNotary}
                            onChange={this.handleChangeInput}
                        />
                    </Label>
                    <Label size="32%">
                        <Placeholder>Дата</Placeholder>
                        <Input
                            type="date"
                            name="dateStatement"
                            value={dateStatement}
                            onChange={this.handleChangeInput}
                        />
                    </Label>
                </Row>
                </Column>
                <Column>
                    <ReactToPrint
                        trigger={() => <button>Print</button>}
                        content={() => this.componentRef}
                    />
                    <StatementToPrint
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
                    />
                </Column>
            </Wrapper>
        )
    }
}

const mapStateToProps = state => ({
    ...state.parties,
    ...state.headerOrder,
});

export default connect(mapStateToProps)(Statement);