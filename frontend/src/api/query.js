import gql from "graphql-tag";

export const GenderQuery = async (name) => {
    let resolve, reject;
    const result = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });

    fetch('http://lolololo.zzz.com.ua', {
        method: 'POST',
        body: JSON.stringify({
            action: 'gender',
            name: name,
        }),
        cache: 'no-cache',
    })
        .then(response => {
            response.json().then(data => {
                resolve(data.gender);
            });
        }).catch((err) => reject(err));
    return result;
};

export const NameCase = async (nameState) => {
    let resolve, reject;
    const result = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });

    fetch('http://lolololo.zzz.com.ua', {
        method: 'POST',
        body: JSON.stringify({
            action: 'NameCase',
            name: nameState,
        }),
        cache: 'no-cache',
    })
        .then(response => {
            response.json().then(data => {
                resolve(data.name);
            });
        }).catch((err) => reject(err));
    return result;
};



export const GET_CONTRACT = gql`
  query GetContract($id: ID!) {
    contract(id: $id) {
        id
        data
        object {
          label
          value
        }
        contractType {
          label
          value
        }
    }
  }
`;