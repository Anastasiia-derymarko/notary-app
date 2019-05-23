import React, { Component } from 'react';
import { IssuedOnToValide, ConvertingNumberToString } from './ConvertingNumberToString';
import moment from 'moment';
import {Header, MainText, Title, Column, Row, StylePrint, Indent, BoldItalic} from './styleComponents';
import { Declination } from './Declination';

class StatementToPrint extends Component {
    render(){
        const {buyer, name, registrationNumber, address, nameDoc, serieNumber, registerNumber, issuedBy, issuedOn, nameNotary, dateStatement, nameCase, nameBuyer} = this.props;
        const sex = buyer.chooseMorWBuyer !== '1' ? '1' : '0';
        const WifeOrHusband = (genderParty) => {
            return genderParty !== '1' ? ['дружина', 'моїм чоловіком']: ['чоловік','моєю дружиною'];
        };
        return (
            <StylePrint>
                <Header>
                    <h5>НОТАРІАЛЬНИМ ОРГАНАМ</h5>
                    <p><b>{nameCase}</b>, реєстраційний номер облікової картки платника податків <b>{registrationNumber}, </b><Declination sex={sex}/> за адресою: {address}
                    </p>
                </Header>

                <Title>ЗАЯВА</Title>
                <MainText>
                    <Indent>Я, <b>{name}</b>, даю свою згоду на КУПІВЛЮ {WifeOrHusband(buyer.chooseMorWBuyer)[1]} <b>{nameBuyer[4]}</b>, реєстраційний номер облікової картки платника податків <b>{buyer.registrationNumberBuyer}</b>, <Declination sex={buyer.chooseMorWBuyer}/>за адресою: <b>{buyer.addressBuyer}</b> нерухомого майна, а саме квартири пiд номером 30 (тридцять), що знаходиться в будинку під номером 2-А (два «А») на вулиці Піддубного Івана в місті Києві.</Indent>
                        <Indent>Я підтверджую, що гроші, які витрачаються на придбання квартири, є нашою спільною сумісною власністю. Придбана квартира також буде об’єктом права спільної сумісної власності як така, що набувається нами за час шлюбу.</Indent>
                    <p>Договір купівлі-продажу, який буде укладатися за участю моєї дружини <b>{nameBuyer[1]},</b> відповідає інтересам сім’ї, умови купівлі (у тому числі зазначену в договорі ціну) ми попередньо обговорили і вважаємо вигідними для нас, а укладення цього договору відповідає нашому спільному волевиявленню.</p>
                    <p>Факт перебування у шлюбі з <b>{nameBuyer[4]},</b> підтверджується { nameDoc.label } серії {serieNumber}, виданим { issuedBy } <IssuedOnToValide date ={ issuedOn }/> року, а/запис № { registerNumber }.</p>
                    <Indent>Я, <b>{name}</b>, підтверджую, що дію вільно, цілеспрямовано, свідомо, добровільно, розумно та на власний розсуд, без будь-якого примусу, як фізичного так і психічного, бажаючи реального настання правових наслідків, перебуваючи при здоровому розумі та ясній пам’яті, усвідомлюючи значення своїх дій та керуючи ними, не помиляючись щодо обставин, викладених у цій заяві, діючи без впливу обману, за відсутності впливу тяжкої обставини, що спонукають вчинити дану дію на вкрай невигідних умовах.</Indent>
                    <p>Нотаріусом мені роз’яснені вимоги законодавства, в тому числі зміст статей 362, 369 Цивільного кодексу України, статей 60, 61, 63, 65, 72 Сімейного кодексу України.</p>
                </MainText>
                <Row>
                    <BoldItalic><IssuedOnToValide date={dateStatement}/> року</BoldItalic>
                    <BoldItalic>ПІДПИС:  _______________________________________________</BoldItalic>
                </Row>
                <MainText style={{margin:'5% 0 0 0'}}>
                    <BoldItalic>Місто Київ, Україна.</BoldItalic>
                    <BoldItalic><p><ConvertingNumberToString number={moment(dateStatement).format('DD/MM/YYYY')} capsFirstLetter={true} /> року.</p></BoldItalic>
                    <p>Я, { nameNotary }, приватний нотаріус Київського міського нотаріального округу, засвідчую справжність підпису <b>{nameCase}</b>, який зроблено у моїй присутності.</p>
                    <p>Особу <b>{ nameCase }</b>, який підписав документ, встановлено, його дієздатність та факт реєстрації шлюбу перевірено.</p>
                </MainText>
                <Column style={{margin:'5% 0 0 0', textAlign:'center'}}>
                    <p>Зареєстровано в реєстрі за №</p>
                    <p>Стягнуто плати: згідно ст. 31 Закону України «Про нотаріат»</p>
                    <p style={{marginTop:'3%'}}>Приватний нотаріус:</p>
                </Column>
            </StylePrint>
        );
    }
}

export default (StatementToPrint);