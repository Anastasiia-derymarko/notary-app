import { SET_DOC_SELLER} from '../constans/setup'


const initialState = {
    docSeller:{
        name:1,
        type:1,
        issuedOn:"2012-05-17",
        issuedBy:'Юрченком В.В., приватним нотаріусом Київського міського нотаріального округу',
        indexNumbers: 1286,
        registry :{
            name:'Київським міським бюро технічної інвентаризації та реєстрації права власності на об’єкти нерухомого майна',
            indexNumbers:'6063',
            issuedOn:"2012-06-04",
        },
    },
};

export default function docSeller(state = initialState, action) {

    switch (action.type){
        case SET_DOC_SELLER:
            return { ...state, docSeller: action.payload };

        default:
            return state;
    }

}