import React, { Component }from 'react';
import { IssuedOnToValide, ConvertingNumberToString } from './ConvertingNumberToString';
import moment from 'moment';
import {Header, MainText, Title, Column, Row, StylePrint, Indent, BoldItalic, EmptyGreyLine} from '../styleComponents/styleComponents';
import { Query } from 'react-apollo';
import { NAME_CASE } from '../api/query';
import PrintAddress from '../components/printAddress'

class StatementToPrint extends Component {

    render(){

        const {name, registrationNumber, address, participant, nameDoc, serieNumber, indexNumbers, issuedBy, issuedOn, nameNotary, dateStatement, indexNumbersNotary} = this.props;

        const WifeOrHusband = (gender) => {
            return gender == "2"
                ? ['яка зареєстрована','моїм чоловіком','мого чоловіка', 'яка підписала ', 'її']
                : [' який зареєстрований ','моєю дружиною', 'моєї дружини ', 'який підписав ', 'його']};
        const genderParty = (gender) => gender === 2 ? ' яка зареєстрована ': ' який зареєстрований ';

        return (
            <Query query={ NAME_CASE } variables={{name: [name, participant.name]}}>
                {({ data, loading, error }) => {
                    if (loading) return <p>loading</p>;
                    if (error) return <p>ERROR</p>;
                    return (
                        <StylePrint>
                            <Header>
                                <h5>НОТАРІАЛЬНИМ ОРГАНАМ</h5>
                                <p>
                                    <b>
                                        {!!name
                                        ? data.nameCase[1]
                                        : <EmptyGreyLine width="150"/>}
                                    </b>, реєстраційний номер облікової картки платника податків &nbsp;
                                    <b>
                                        {!!registrationNumber
                                         ? registrationNumber
                                         : <EmptyGreyLine width="80"/>},
                                    </b>&nbsp;
                                        {!!name
                                            ? WifeOrHusband(data.nameGender[0])[0]
                                            : <EmptyGreyLine width="50"/>}&nbsp;
                                            за адресою:
                                    <b>
                                        {!!address
                                            ? address
                                            : <EmptyGreyLine width="180"/>}
                                    </b>
                                </p>
                            </Header>
                            <Title>ЗАЯВА</Title>
                            <MainText>
                                <Indent>Я,
                                    <b>
                                        {!!name
                                          ? name
                                          : <EmptyGreyLine width="150"/>}
                                    </b>,&nbsp;
                                    даю свою згоду на КУПІВЛЮ {!!name
                                                                ? WifeOrHusband(data.nameGender[0])[1]
                                                                : <EmptyGreyLine width="150"/>}
                                    <b>
                                       {!!participant.name
                                          ? data.nameCase[11]
                                          : <EmptyGreyLine width="150"/>}
                                    </b>,реєстраційний номер облікової картки платника податків
                                    <b>
                                        {!!participant.registrationNumber
                                            ? participant.registrationNumber
                                            : <EmptyGreyLine width="70"/>}
                                    </b>,
                                    {!!participant.name
                                      ? genderParty(data.nameGender[1])
                                      : <EmptyGreyLine width="50"/>}за адресою:
                                    <b>
                                        {!!participant.address
                                             ? participant.address
                                             : <EmptyGreyLine width="180"/>}
                                    </b> нерухомого майна, а саме <PrintAddress address={this.props.contractAddress}/>
                                </Indent>
                                <Indent>Я підтверджую, що гроші, які витрачаються на придбання квартири, є нашою спільною
                                    сумісною власністю. Придбана квартира також буде об’єктом права спільної сумісної
                                    власності як така, що набувається нами за час шлюбу.
                                </Indent>
                                <p>Договір купівлі-продажу, який буде укладатися за
                                    участю {!!participant.name
                                            ? WifeOrHusband(data.nameGender)[2]
                                            : <span><EmptyGreyLine width="30"/><b>{data.nameCase[8]},</b></span>}
                                    відповідає інтересам сім’ї, умови
                                    купівлі (у тому числі зазначену в договорі ціну) ми попередньо обговорили і вважаємо
                                    вигідними для нас, а укладення цього договору відповідає нашому спільному волевиявленню.
                                </p>
                                <p>Факт перебування у шлюбі з
                                    <b>{!!participant.name
                                        ? data.nameCase[11]
                                        : <EmptyGreyLine width="150"/>},
                                    </b> підтверджується
                                    { !!nameDoc.label
                                        ? nameDoc.label
                                        : <EmptyGreyLine width="200"/>} серії
                                    {!!serieNumber
                                        ? serieNumber
                                        : <EmptyGreyLine width="20"/>}, виданий
                                    {!!issuedBy
                                    ? issuedBy
                                    : <span>
                                        <EmptyGreyLine width="20"/>&nbsp;
                                        <IssuedOnToValide date={ issuedOn }/>
                                      </span>} року, а/запис №
                                    { !!indexNumbers
                                        ? indexNumbers
                                        : <EmptyGreyLine width="20"/>}.
                                </p>
                                <Indent>Я,
                                    <b>
                                        {!!name
                                            ? name
                                            : <EmptyGreyLine width="150"/>}
                                    </b>, підтверджую, що дію вільно, цілеспрямовано, свідомо, добровільно,
                                    розумно та на власний розсуд, без будь-якого примусу, як фізичного так і психічного,
                                    бажаючи реального настання правових наслідків, перебуваючи при здоровому розумі та ясній
                                    пам’яті, усвідомлюючи значення своїх дій та керуючи ними, не помиляючись щодо обставин,
                                    викладених у цій заяві, діючи без впливу обману, за відсутності впливу тяжкої обставини,
                                    що спонукають вчинити дану дію на вкрай невигідних умовах.
                                </Indent>
                                <p>Нотаріусом мені роз’яснені вимоги законодавства, в тому числі зміст статей 362, 369
                                    Цивільного кодексу України, статей 60, 61, 63, 65, 72 Сімейного кодексу України.
                                </p>
                            </MainText>
                            <Row>
                                <BoldItalic>
                                    {!! dateStatement
                                        ? <IssuedOnToValide date={dateStatement}/>
                                        : <EmptyGreyLine width="50"/>} року
                                </BoldItalic>
                                <BoldItalic>
                                    ПІДПИС: _______________________________________________
                                </BoldItalic>
                            </Row>
                            <MainText>
                                <BoldItalic>Місто Київ, Україна.</BoldItalic>
                                <BoldItalic>
                                    <p>
                                        {!!dateStatement
                                            ? <ConvertingNumberToString number={moment(dateStatement).format('DD/MM/YYYY')}
                                                                        capsFirstLetter={true}/>
                                            : <EmptyGreyLine width="100"/>}року.
                                    </p>
                                </BoldItalic>
                                <p>Я,
                                    { !!nameNotary
                                        ? nameNotary
                                        : <EmptyGreyLine width="150"/>}, засвідчую справжність підпису
                                    <b>{
                                        !!participant.name
                                            ? data.nameCase[1]
                                            : <EmptyGreyLine width="150"/>}
                                    </b>, який зроблено у моїй присутності.
                                </p>
                                <p>Особу
                                    { !!participant.name
                                        ? <span>
                                            <b>data.nameCase[1]</b>,
                                            {WifeOrHusband(data.nameGender[0])[3]}документ, встановлено,
                                            {WifeOrHusband(data.nameGender[0])[4]}
                                          </span>
                                        : <EmptyGreyLine width="150"/>} дієздатність та факт реєстрації шлюбу перевірено.
                                </p>
                            </MainText>
                            <Column style={{textAlign: 'center'}}>
                                <p>Зареєстровано в реєстрі за №
                                    {!!indexNumbersNotary
                                        ? indexNumbersNotary
                                        : <EmptyGreyLine width="50"/>}
                                </p>
                                <p>Стягнуто плати: згідно ст. 31 Закону України «Про нотаріат»</p>
                                <p style={{marginTop: '3%'}}>Приватний нотаріус:</p>
                            </Column>
                        </StylePrint>
                    )
                }}
            </Query>
        );
    }

}

export default (StatementToPrint);