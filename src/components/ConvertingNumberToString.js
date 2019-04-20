import { months, days, days_new } from '../data/orders.js';

function fun_dayes (day){
    if(day <= 9){
        day = days_new[day];
    }else if(day >= 10 && day <= 19){
        day = days[1][day-10];
        day = day.slice(0, -1) + 'ого';
    }else{
        day= String(day).split('');
        day[0] = days[2][day[0]];
        if(day[1] === '0'){
            day[0] = day[0].slice(0, -1) + 'ого';
            delete day[1];
        }else{
            day[0] = day[0] + ' ';
            day[1] = days_new[day[1]];
        }
        day = day.join('');
    }
    return day
}

function MonthToString(month) {
    month = parseInt(month,10);
    month = months[month];

    if(month.slice(-3) === 'ень'){
        month = month.slice(0, -3) + 'ня';
    }else if(month.slice(-2) === 'ий'){
        month = month.slice(0, -2) + 'ого';
    }else{
        month = month+'а';
    }
    return month;
}

function IssuedOnToValide(issuedOn) {
    issuedOn = issuedOn.date;
    issuedOn = issuedOn.split('-');
    console.log(issuedOn);
    issuedOn[1] = MonthToString(issuedOn[1]);
    issuedOn[2]= parseInt(issuedOn[2], 10);

    return issuedOn.reverse().join(' ');
}

export const ConvertingNumberToString = (number) =>{
    number = number.number;
    number = number.split('/');
    number[0] = parseInt(number[0],10);
    number[0] = fun_dayes (number[0]);
    number[1] = MonthToString(number[1]);

    let years = number[2].split('0');
    years[0] = 'дві тисячі';
    years[1] = fun_dayes (years[1]);

    number[2] = years.join(' ');
    let str = number.join(' ');

    return str;
};

let mapNumbers = {
    0 : [2, 1, "нуль"],
    1 : [0, 2, "один", "одна"],
    2 : [1, 2, "дві", "дві"],
    3 : [1, 1, "три"],
    4 : [1, 1, "чотири"],
    5 : [2, 1, "пʼять"],
    6 : [2, 1, "шість"],
    7 : [2, 1, "сімь"],
    8 : [2, 1, "вісім"],
    9 : [2, 1, "дев'ять"],
    10 : [2, 1, "десять"],
    11 : [2, 1, "одинадцять"],
    12 : [2, 1, "дванадцять"],
    13 : [2, 1, "тринадцять"],
    14 : [2, 1, "четирнадцять"],
    15 : [2, 1, "п'ятнадцять"],
    16 : [2, 1, "шістнадцять"],
    17 : [2, 1, "сімнадцять"],
    18 : [2, 1, "вісімнадцять"],
    19 : [2, 1, "дев'ятнадцять"],
    20 : [2, 1, "двадцять"],
    30 : [2, 1, "тридцять"],
    40 : [2, 1, "сорок"],
    50 : [2, 1, "п'ятдесят"],
    60 : [2, 1, "шістдесят"],
    70 : [2, 1, "сімдесят"],
    80 : [2, 1, "вісімдесят"],
    90 : [2, 1, "дев'яносто"],
    100 : [2, 1, "сто"],
    200 : [2, 1, "двісті"],
    300 : [2, 1, "триста"],
    400 : [2, 1, "чотириста"],
    500 : [2, 1, "п'ятсот"],
    600 : [2, 1, "шістсот"],
    700 : [2, 1, "сімсот"],
    800 : [2, 1, "вісімсот"],
    900 : [2, 1, "дев'ятсот"]
};

let mapOrders = [
    { _Gender : true, _arrStates : ["гривня", "гривні", "гривень"] },
    { _Gender : false, _arrStates : ["тисяча", "тисячі", "тисяч"] },
    { _Gender : true, _arrStates : ["міліон", "міліона", "міліонів"] },
    { _Gender : true, _arrStates : ["міліард", "міліарда", "міліардів"] },
    { _Gender : true, _arrStates : ["триліон", "трилліона", "триліонів"] }
];

let objKop = { _Gender : false, _arrStates : ["копійка", "копійки", "копійок"] };

function Value(dVal, bGender) {
    let xVal = mapNumbers[dVal];
    if (xVal[1] === 1) {
        return xVal[2];
    } else {
        return xVal[2 + (bGender ? 0 : 1)];
    }
}

function From0To999(fValue, oObjDesc, fnAddNum, fnAddDesc)
{
    let nCurrState = 2;
    if (Math.floor(fValue/100) > 0) {
        let fCurr = Math.floor(fValue/100)*100;
        fnAddNum(Value(fCurr, oObjDesc._Gender));
        nCurrState = mapNumbers[fCurr][0];
        fValue -= fCurr;
    }

    if (fValue < 20) {
        // if 00 coins
        // return;
        if (Math.floor(fValue) > 0) {
            fnAddNum(Value(fValue, oObjDesc._Gender));
            nCurrState = mapNumbers[fValue][0];
        }
    } else {
        let fCurr = Math.floor(fValue/10)*10;
        fnAddNum(Value(fCurr, oObjDesc._Gender));
        nCurrState = mapNumbers[fCurr][0];
        fValue -= fCurr;

        if (Math.floor(fValue) > 0) {
            fnAddNum(Value(fValue, oObjDesc._Gender));
            nCurrState = mapNumbers[fValue][0];
        }
    }

    fnAddDesc(oObjDesc._arrStates[nCurrState]);
}

function FloatToSamplesInWordsRus(fAmount)
{
    fAmount = parseFloat(fAmount.price);

    let fInt = Math.floor(fAmount + 0.005);
    let fDec = Math.floor(((fAmount - fInt) * 100) + 0.5);

    let arrRet = [];
    let arrThousands = [];
    for (; fInt > 0.9999; fInt/=1000) {
        arrThousands.push(Math.floor(fInt % 1000));
    }
    if (arrThousands.length === 0) {
        arrThousands.push(0);
    }

    function PushToRes(strVal) {
        arrRet.push(strVal);
    }

    for (let iSouth = arrThousands.length-1; iSouth >= 0; --iSouth) {
        if (arrThousands[iSouth] === 0) {
            continue;
        }
        From0To999(arrThousands[iSouth], mapOrders[iSouth], PushToRes, PushToRes);
    }

    if (arrThousands[0] === 0) {
        //  Handle zero amount
        if (arrThousands.length === 1) {
            PushToRes(Value(0, mapOrders[0]._Gender));
        }

        let nCurrState = 2;
        PushToRes(mapOrders[0]._arrStates[nCurrState]);
    }

    // Capitalize first letter
    // if (arrRet.length > 0) {
    // arrRet[0] = arrRet[0].match(/^(.)/)[1].toLocaleUpperCase() + arrRet[0].match(/^.(.*)$/)[1];
    // }

        arrRet.push((fDec < 10) ? ("0" + fDec) : ("" + fDec));
    From0To999(fDec, objKop, function() {}, PushToRes);

    let replaceString = arrRet.join(" ").replace(' 00 копійок', '').replace(' грив', ') грив');
    return '('+replaceString;
}

// this.getField("Сумма_пр").value = FloatToSamplesInWordsRus(parseFloat(event.value))+".";

function SpaceBetweenNumbers(numbers) {
    numbers = numbers.price;
    let stringNumber;

    if (numbers >= 1000 && numbers < 1000000 ){

        stringNumber = String(numbers).split('');
        stringNumber.splice(-3, 0, " ");
        stringNumber = stringNumber.join('');

    }else if(numbers >= 1000000 ){
        stringNumber = String(numbers).split('');

        console.log(stringNumber);
        stringNumber.splice(-3, 0, " ");
        stringNumber.splice(-7, 0, " ");
        stringNumber = stringNumber.join('');
    }
    return stringNumber;

}

export {MonthToString, FloatToSamplesInWordsRus, SpaceBetweenNumbers, IssuedOnToValide };