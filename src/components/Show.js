import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { orderTypes, orderObjects} from '../data/orders.js';
import moment from 'moment';
import '../components/style/show.css';
import { ConvertingNumberToString, MonthToString, FloatToSamplesInWordsRus, SpaceBetweenNumbers } from '../components/ConvertingNumberToString';

function Declination(props) {
	return (props.nameWorM !== 1 ? 'який зареєстрований' : 'яка зареєстрована')
}

function СonsistsText (numberOfRooms) {
    let number = numberOfRooms.number,
        classification = ["двох", "трьох", "чотирьох", "п'яти", "шести", "сьоми", "восьми", "дев'яти", "десяти",  "однокімнатна", "двокімнатна", "трьохкімнатна"]

    if (Number(number) > 1 ){
        return classification[number-2]+' жилих кімнат';
    }else{
        return ' однієї жилої кімнати';
    }
}

function GenitiveCase(word) {
    return word.word.replace('договір','Договору');
}

function IssuedOnToValide(issuedOn) {
    issuedOn = issuedOn.date;
    issuedOn = issuedOn.split('-');

    issuedOn[1] = MonthToString(issuedOn[1]);
    issuedOn[2]= parseInt(issuedOn[2], 10);

    return issuedOn.reverse().join(' ');
}

class Show extends Component {
render(){
	const { orderType, orderObject, orderDate,
		registrationNumberSeller, nameSeller, addressSeller,
		registrationNumberBuyer, nameBuyer, addressBuyer,cityValue,
        addressStateObject, footage, docSeller, price, buyer } = this.props;
	return	(
	<div className="row">
		<div className="show">
			<div className="showHead bold">
				<p className="uppercase">{ orderTypes[orderType].label }</p>
				<p>{ orderObjects[orderObject].label }</p>
				<p className= "italic">Місто Київ,
                    <ConvertingNumberToString number = { moment(orderDate).format('DD/MM/YYYY') }/></p>
			</div>
			<div className="showBody">
        <p>Попередньо ознайомившись з вимогами цивільного законодавства щодо
            недійсності правочинів, перебуваючи при здоровому розумі та ясній пам'яті,
            діючи добровільно, ми:</p>
				<span><span className = "bold uppercase italic">{nameSeller},</span>
                    реєстраційний номер облікової картки платника податків
                    <span className = "bold uppercase italic">{registrationNumberSeller}, </span>
		 			<Declination nameWorM = {parseInt(this.props.chooseMorWSeller, 10)}/>
                    за адресою: {addressSeller}, – надалі «Продавець»,
		 			та <span className = "bold uppercase italic">{buyer.nameBuyer},</span> реєстраційний номер облікової картки платника податків
                    <span className = "bold uppercase italic"> {buyer.registrationNumberBuyer},</span>
					<Declination nameWorM = {parseInt(buyer.chooseMorWBuyer, 10)}/>
                    за адресою: {buyer.addressBuyer},
					– надалі «Покупець», які також іменуються «Сторони», уклали цей договір
                    про нижчевикладене:
				</span>
        <p>1. Продавці зобов’язуються передати у власність Покупця квартиру під номером 30 (тридцять),
        що знаходиться в будинку під номером 2-А (два «А») на вулиці Піддубного Івана в місті
            {cityValue <= 0 ? '' : cityValue},
        а Покупець зобов’язується прийняти цю квартиру та сплатити за неї ціну відповідно до умов,
        що визначені в цьому Договорі.</p>
                <p>Квартира, що відчужується, складається з
                    <b><СonsistsText number = { footage.numberOfRooms }/>.
                    </b> Загальна площа квартири <b>{footage.totalArea} кв.м.,</b>
                    в тому числі житлова – <b>{footage.livingArea} кв.м.</b></p>
			    <p>2. Квартира належить <b>Продавцю</b> на пiдставi <b><GenitiveCase word = {orderTypes[docSeller.name].label}/> {orderObjects[docSeller.type].label}</b>,
                    посвідченого <IssuedOnToValide date = {docSeller.issuedOn} /> року {docSeller.issuedBy} за реєстровим № {docSeller.indexNumbers}, зареєстрованого {docSeller.registry.name} <IssuedOnToValide date ={docSeller.registry.issuedOn} /> року за реєстровим № {docSeller.registry.indexNumbers}.</p>
                <p>3. За погодженням сторін продаж квартири вчинено за <b><SpaceBetweenNumbers price = {price.priceObject} /> <FloatToSamplesInWordsRus price={price.priceObject} />, </b>
                    які повністю сплачені <b>Покупцем Продавцю</b> до підписання цього договору. </p>
                <p>
                    4. Ми, <b>Продавці</b>, своїми підписами під цим договором підтверджуємо факт повного розрахунку за продану квартиру, одержання від <b>Покупця</b> грошей в сумі <b><SpaceBetweenNumbers price = {price.priceObject} /></b> <b> <FloatToSamplesInWordsRus price={price.priceObject} />,</b> та відсутність по відношенню до нього будь-яких претензій фінансового характеру.
                </p>
                <p>
                    5. Зазначену в цьому договорі ціну продажу ми, <b>Продавці</b>, вважаємо вигідною для нас, її розмір не пов'язаний зі збігом якихось важких для нас обставин і повністю нас задовольняє.
                </p>
                <p>
                    6. Ринкова вартість квартири становить <b><SpaceBetweenNumbers price = {price.appraisalValue} /> <FloatToSamplesInWordsRus price={price.appraisalValue} /> </b> згідно з {price.conclusion}, виконаним суб’єктом оціночної діяльності {price.issuedBy} <IssuedOnToValide date ={price.issuedOn} />.
                </p>
                <p>
                    7. <b>Продавці</b> гарантують, що прихованих недоліків квартира, що відчужується, не має; не належить до пам’яток історії та культури; не занесена і не підлягає занесенню до Державного реєстру нерухомого майна пам’яток України або до Державного реєстру нерухомих пам’яток України; <b>самовільних перебудов, переобладнань, реконструкцій в квартирі немає;</b> фактичні технічні характеристики квартири повністю відповідають тим, які відображені у технічному паспорті, який при огляді квартири <b>Покупцем</b> наданий їй для ознайомлення та порівняння; в квартирі, що відчужується, не зареєстровані та не мешкають малолітні, неповнолітні (не мають права користування), непрацездатні особи, яких <b>Продавці</b> зобов’язані утримувати за законодавством чи договором; до укладення цього договору нікому іншому вона не відчужена; під забороною (арештом) та заставою (в тому числі податковою) не перебуває; як внесок до статутного фонду юридичних осіб не передана, судового спору щодо неї, а також прав у третіх осіб (право наймача, право застави, право довічного користування, сервітутів тощо), як в межах так і за межами України немає.
                </p>
                <p>
                    8. Згідно з інформаційною довідкою з ДРРП на нерухоме майно та Реєстру прав власності на нерухоме майно, Державного реєстру Іпотек, Єдиного реєстру заборон відчуження об’єктів нерухомого майна щодо об’єкта нерухомого майна від <IssuedOnToValide date={orderDate}/> року актуальна інформація про обтяження, іпотеки, інші речові права стосовно квартири відсутня.
                </p>
                <p>
                    Згідно з інформаційною довідкою з ДРРП на нерухоме майно та Реєстру прав власності на нерухоме майно, Державного реєстру Іпотек, Єдиного реєстру заборон відчуження об’єктів нерухомого майна щодо суб’єкта від <IssuedOnToValide date={orderDate}/> року актуальна інформація про обтяження, іпотеки, інші речові права стосовно Продавців відсутня.
                </p>
                <p>
                    9. Ми, <b>Продавці</b> та <b>Покупець,</b> підтверджуємо, що цей правочин відповідає нашим дійсним намірам і не носить характеру фіктивного, удаваного, не є зловмисним, а також будь-які обставини помилки, обману, насильства, тяжких обставин для вчинення цього правочину відсутні, а також <b>Покупець</b> стверджує, що кошти, витрачені на придбання цієї квартири не здобуті нею злочинним шляхом.
                </p>
                <p>
                    10. Квартира, що відчужується, візуально оглянута мною, <b>Покупцем,</b> до підписання цього договору, її стан та технічні характеристики мені відомі та повністю мене влаштовують, недоліків чи дефектів, які перешкоджали б її використанню за призначенням, а також самовільних перебудов, переобладнань,
                    реконструкцій, на момент огляду не виявлено, будь-яких претензій до <b>Продавців</b> я не маю.
                </p>
                <p>
                    11. Договір є укладеним з моменту його нотаріального посвідчення. Згідно зі ст.182 Цивільного кодексу України право власності на нерухоме майно підлягає державній реєстрації. Згідно з вимогами п.4 ст. 334 Цивільного кодексу України право власності на нерухоме майно, яке підлягає державній реєстрації, виникає у набувача з моменту такої реєстрації в Державному реєстрі речових прав на нерухоме майно.
                </p>
                <p>
                    Сторонам нотаріусом роз’яснено, що згідно з ч. 3 ст. 10 Закону України «Про Державну реєстрацію речових прав на нерухоме майно та їх обтяжень» державний реєстратор встановлює наявність факту виконання умов правочину.
                </p>
                <p>
                    12. Плата за нотаріальне посвідчення цього договору сплачується сторонами за домовленістю, плата в розмірі державного мита сплачується <b>Продавцями.</b>
                </p>
                <p>
                    13. <b>Продавці</b> зобов’язуються звільнити квартиру та передати ключі <b>Покупцеві</b> в день підписання цього договору. У квартирі, що відчужується, ніхто не зареєстрований.
                </p>
                <p>
                    14. Згідно з п. 9 ст. 1, п. 8 ст. 2 Закону України «Про збір на обов'язкове державне пенсійне страхування», збір на обов'язкове державне пенсійне страхування  сплачується <b>Покупцем.</b>
                </p>
                <p>
                    15. Зміст ст.ст. 164-167, 172 Податкового кодексу України нам, <b>Продавцям</b> та <b>Покупцю,</b> нотаріусом, роз’яснено.
                </p>
                <p>
                    16. Правові наслідки, пов'язані із умисним заниженням дійсної суми договору сторонам роз'яснено, зі змістом ст.ст. 182, 225, 226, 229-235, 334, 382, 395, 655, 657 Цивільного кодексу України, ст. 65, 67 Сімейного кодексу України, ст. 12 Закону України «Про основи соціального захисту бездомних громадян і безпритульних дітей», вимогами пункту 7 Правил користування приміщеннями житлових будинків і гуртожитків, затвердженими Постановою Кабінету Міністрів України 08 жовтня 1992 року № 572 в редакції Постанови КМ України від 14 січня 2009 року за № 5, ст.ст. 8, 9, 15 Закону України «Про запобігання та протидію легалізації (відмиванню) доходів, одержаних злочинним шляхом, фінансуванню тероризму та фінансуванню розповсюдження зброї масового знищення», положеннями Закону України «Про державну реєстрацію речових прав на нерухоме майно та їх обтяжень» сторони ознайомлені.
                </p>
                <p>
                    17. Спори між сторонами, що випливають із цього Договору, в тому числі і спори, що стосуються його тлумачення, визнання недійсним чи невиконання умов, вирішуються в судовому порядку. Зміни до договору вносяться шляхом укладання додаткового договору з дотриманням вимог чинного законодавства, підписуються сторонами та посвідчуються нотаріально.
                </p>
                <p>
                    18. Цей договір укладено за згодою чоловіка <b>Покупця</b> – ---------------------- на купівлю квартири, викладеною у вигляді заяви, справжність підпису на якій засвідчено --------------, приватним нотаріусом Київського міського нотаріального округу, 07 вересня 2018 року за реєстровим №----.
                </p>
                <p>
                    Цей договір складено, підписано та посвідчено в двох примірниках, один з яких зберігається у справах приватного нотаріуса, а інший, викладений на нотаріальному бланку, видається Покупцю.
                </p>

            </div>
		</div>
	</div>
)
}

}

Show.propTypes = {
  orderType:PropTypes.number.isRequired,
  orderObject:PropTypes.number.isRequired,
  orderDate:PropTypes.object.isRequired,
  registrationNumberSeller:PropTypes.string.isRequired,
  nameSeller:PropTypes.string.isRequired,
  addressSeller:PropTypes.string.isRequired,
  registrationNumberBuyer:PropTypes.string.isRequired,
  nameBuyer:PropTypes.string.isRequired,
  addressBuyer:PropTypes.string.isRequired,
  chooseMorWSeller:PropTypes.string.isRequired,
  chooseMorWBuyer:PropTypes.string.isRequired,
  cityValue:PropTypes.number.isRequired,
  addressStateObject:PropTypes.object.isRequired,
    footage:PropTypes.object.isRequired,
    price:PropTypes.object.isRequired,
    buyer:PropTypes.object.isRequired,

}

const mapStateToProps = state => ({
   ...state.headerOrder,
   ...state.parties,
   ...state.addressObject,
    ...state.docSeller,
    ...state.price,
});
export default connect(mapStateToProps)(Show)

