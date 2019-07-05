import { SET_DOC_SELLER} from '../constans/setup'

const initialState = {
    docSeller: {
        name: {label: "договору купівлі-продажу", value: 1},
        type: {label: "квартири", value: 1,},
        issuedOn: "2012-05-17",
        issuedBy: 'Юрченком В.В., приватним нотаріусом Київського міського нотаріального округу',
        indexNumbers: 1286,
        registryName: 'Київським міським бюро технічної інвентаризації та реєстрації права власності на об’єкти нерухомого майна',
        registryIndexNumbers: '6063',
        registryIssuedOn: "2012-06-04",
    },
};

export default function docSeller(state = initialState, action) {
    let name;
    let obj;

    for (let i in action.payload){
      name = i;
      obj = action.payload[i];
    }

    switch (action.type){
        case SET_DOC_SELLER:
            return { ...state, docSeller:{...state.docSeller,[name]: obj}};

        default:
            return state;
    }
}