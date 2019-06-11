import { SET_MAIN_PARAMETERS } from '../constans/setup'

// let dataLocal = new Date();
// let dataString = dataLocal.getFullYear()+'-0'+(+dataLocal.getMonth()+1)+'-'+dataLocal.getDate();

const initialState = {
    mainParametersContract:{
        orderType: {label: "договір купівлі-продажу", value: 1},
        orderObject: {label: "квартири", value: 1},
        orderDate: '2019-05-05',
    }
};

export default function headerOrder(state = initialState, action) {
    let name;
    let obj;

    for (let i in action.payload){
        name = i;
        obj = action.payload[i];
    }

  switch (action.type){
  	case SET_MAIN_PARAMETERS:
  	return { ...state, mainParametersContract: {...state.mainParametersContract, [name]: obj}};

  	default:
  	  return state;
  }

}

const data = initialState.mainParametersContract;


const NameCase = async (type, obj, date, number, nameNotary) => {
    let resolve, reject;
    const result = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });

    fetch('http://lolololo.zzz.com.ua', {
        method: 'POST',
        body: JSON.stringify({
            action: 'addAgreement',
            type: type,
        }),
        cache: 'no-cache',
    })
        .then(response => {
            console.log(response);
        }).catch((err) => reject(err));
    return result;
};
console.log(data.orderType)
NameCase(data.orderType);
