import React from 'react';
import { FloatToSamplesInWordsRus } from './ConvertingNumberToString';
import {BoldItalic, EmptyGreyLine} from '../styleComponents/styleComponents';

export default function PrintAddress(props) {
    const ObjectCase = (object) => {return object === 'квартира ' ? 'квартири ' : object};
    const a = props.address;

    return (
        <span>
            {!!a.typeObjectValue.label
                ? ObjectCase(a.typeObjectValue.label)
                : <EmptyGreyLine width="30"/>}пiд номером
            <BoldItalic>
                {!!a.numberObjectValue
                    ? a.numberObjectValue
                    : <EmptyGreyLine width="15"/>}
                    ({!!a.numberObjectValue
                       ? <FloatToSamplesInWordsRus number = {true} price={a.numberObjectValue}/>
                       : <EmptyGreyLine width="30"/>})
            </BoldItalic> що знаходиться
            <BoldItalic>в будинку під номером
                {!!a.numberBuildingValue
                  ? a.numberBuildingValue
                  : <EmptyGreyLine width="15"/>}
                  ({!!a.numberBuildingValue
                     ? <FloatToSamplesInWordsRus number = {true} price={a.numberBuildingValue} />
                     : <EmptyGreyLine width="30"/> })
                на {!!a.street.label
                    ? a.street.label
                    : <EmptyGreyLine width="70"/>} в місті
                {!!a.city.label
                  ? a.city.label
                  :<EmptyGreyLine width="30"/> }.
            </BoldItalic>
        </span>
    )
}