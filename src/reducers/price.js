import { SET_PRICE} from '../constans/setup'

const initialState = {
    price: {
        priceObject: 34568,
        appraisalValue: 585522,
        conclusion:'Висновком про вартість майна',
        issuedOn:'2019-03-04',
        issuedBy:'ФОП "Вишенський А.В."',
    }
};

export default function setPrice(state = initialState, action) {
    switch (action.type){
        case SET_PRICE:
            return { ...state, price: action.payload };

        default:
            return state;
    }
}