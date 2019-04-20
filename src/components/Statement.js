import React, { Component } from 'react';

import Parties from '../components/Parties.js';
import { connect } from 'react-redux';
import { Declination } from './Declination';
import Select from 'react-select';
import { statementDoc } from '../data/orders';
import { IssuedOnToValide, ConvertingNumberToString } from './ConvertingNumberToString';
import moment from 'moment';

class Statement extends Component {
    constructor (props) {
        super(props);

        this.state = {
            name:'Вашкулата Олега Юрійовича',
            registrationNumber:2805605055,
            address:'м. Київ, вул. Василя Яна, буд. 2, кв. 14',
            nameDoc:1,
            serieNumber:"ВК № 345654",
            registerNumber:'245/р',
            issuedOn:'2012-06-04',
            issuedBy:'відділом реєстрації актів громадянського стану Печерського районного управління юстиції міста Києва',
            nameNotary:'Климпик В.В.',
            dateStatement:'2012-04-04',
        }
    }

    handleChangeInput = e => {
        let name = typeof(e) !== 'string' ? e.target.name : 'chooseMorW';
        let value = typeof(e) !== 'string' ? e.target.value : e;

        this.setState({[name]: value});
    }

    render(){
        const {name, registrationNumber, address, nameDoc, serieNumber, registerNumber, issuedBy, issuedOn, nameNotary, dateStatement} = this.state;
        const {buyer} = this.props;
        const sex = buyer.chooseMorWBuyer !== '1' ? '1' : '0';
        const WifeOrHusband = (genderParty) => {
            return genderParty !== '1' ? ['дружина', 'моїм чоловіком']: ['чоловік','моєю дружиною'];;
        }
        return(
            <div>
                <Parties
                    name={name}
                    handleChangeInput={this.handleChangeInput}
                    registrationNumber={registrationNumber}
                    chooseMorW = 'false'
                    address={address}
                    NameParties =  {WifeOrHusband(buyer.chooseMorWBuyer)[0] +' покупця'}
                />
                Свідоцтво
                <Select
                    name="nameDoc"
                    value={nameDoc}
                    onChange={this.handleChangeInput}
                    options={statementDoc}
                />
                Серія, номер
                <input
                    type="text"
                    name="serieNumber"
                    value={serieNumber}
                    onChange={this.handleChangeInput}
                />
                а/запис
                <input
                    type="text"
                    name="registerNumber"
                    value={registerNumber}
                    onChange={this.handleChangeInput}
                />
                Видавник
                <input
                    type="text"
                    name="issuedBy"
                    value={issuedBy}
                    onChange={this.handleChangeInput}
                />
                Дата видачі
                <input
                    type="date"
                    name="issuedOn"
                    value={issuedOn}
                    onChange={this.handleChangeInput}
                />
                Дата
                <input
                    type="date"
                    name="dateStatement"
                    value={dateStatement}
                    onChange={this.handleChangeInput}
                />
                Нотаріус
                <input
                    type="text"
                    name="nameNotary"
                    value={nameNotary}
                    onChange={this.handleChangeInput}
                />

                <div style={{width:'50%',}}>
                    <div>
                    <h5>НОТАРІАЛЬНИМ ОРГАНАМ</h5>


                    <p><b>{name}</b>, реєстраційний номер облікової картки платника податків <b>{registrationNumber}, </b><Declination sex={sex}/> за адресою: {address}
                    </p>
                    </div>


                    <h5>ЗАЯВА</h5>

                   <p>Я, <b>{name}</b>, даю свою згоду на КУПІВЛЮ {WifeOrHusband(buyer.chooseMorWBuyer)[1]} <b>{buyer.nameBuyer}</b>, реєстраційний номер облікової картки платника податків <b>{buyer.registrationNumberBuyer}</b>, <Declination sex={buyer.chooseMorWBuyer}/>за адресою: <b>{buyer.addressBuyer}</b> нерухомого майна, а саме квартири пiд номером 30 (тридцять), що знаходиться в будинку під номером 2-А (два «А») на вулиці Піддубного Івана в місті Києві.
                    Я підтверджую, що гроші, які витрачаються на придбання квартири, є нашою спільною сумісною власністю. Придбана квартира також буде об’єктом права спільної сумісної власності як така, що набувається нами за час шлюбу.</p>
                    <p>Договір купівлі-продажу, який буде укладатися за участю моєї дружини <b>{buyer.nameBuyer},</b> відповідає інтересам сім’ї, умови купівлі (у тому числі зазначену в договорі ціну) ми попередньо обговорили і вважаємо вигідними для нас, а укладення цього договору відповідає нашому спільному волевиявленню.</p>
                    <p>Факт перебування у шлюбі з <b>{buyer.nameBuyer},</b> підтверджується { statementDoc[nameDoc].label } серії {serieNumber}, виданим { issuedBy } <IssuedOnToValide date ={ issuedOn }/> року, а/запис № { registerNumber }.</p>
                    <p>Я, <b>{name}</b>, підтверджую, що дію вільно, цілеспрямовано, свідомо, добровільно, розумно та на власний розсуд, без будь-якого примусу, як фізичного так і психічного, бажаючи реального настання правових наслідків, перебуваючи при здоровому розумі та ясній пам’яті, усвідомлюючи значення своїх дій та керуючи ними, не помиляючись щодо обставин, викладених у цій заяві, діючи без впливу обману, за відсутності впливу тяжкої обставини, що спонукають вчинити дану дію на вкрай невигідних умовах.</p>
                    <p>Нотаріусом мені роз’яснені вимоги законодавства, в тому числі зміст статей 362, 369 Цивільного кодексу України, статей 60, 61, 63, 65, 72 Сімейного кодексу України.</p>

                    <p><IssuedOnToValide date={dateStatement}/> року

                    ПІДПИС:  _______________________________________________

                    </p>
                    <p>Місто Київ, Україна.</p>
                    <p><ConvertingNumberToString number={moment(dateStatement).format('DD/MM/YYYY')}/> року.</p>
                    <p>Я, { nameNotary }, приватний нотаріус Київського міського нотаріального округу, засвідчую справжність підпису <b>{name}</b>, який зроблено у моїй присутності.</p>
                    <p>Особу <b>{ name }</b>, який підписав документ, встановлено, його дієздатність та факт реєстрації шлюбу перевірено.</p>

                    <p>Зареєстровано в реєстрі за №</p>
                    <p>Стягнуто плати: згідно ст. 31 Закону України «Про нотаріат»</p>

                    <p>Приватний нотаріус:</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state.parties,
    ...state.headerOrder,
});

export default connect(mapStateToProps)(Statement);