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
    let name;
    let obj;

    for (let i in action.payload){
        name = i;
        obj = action.payload[i];
    }

    switch (action.type){
        case SET_PRICE:
            return { ...state, price:{...state.price, [name]: obj}};

        default:
            return state;
    }
}