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
  query contract($id: ID!) {
    contract(id: $id) {
        id
        mainParameters{
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
        price {
            appraisalValue
            priceObject
            conclusion
            issuedBy
            issuedOn
        }
        addressAndFootage {
            region {
              label
              value
            }
            area {
              label
              value
            }
            city {
              label
              value
            }
            street {
              label
              value
            }
            typeBuilding {
              label
              value
            }
            numberBuildingValue 
            typeObjectValue {
              label
              value
            }
            numberObjectValue
            numberOfRooms
            totalArea
            livingArea
        }
        participant {
            id
            linkById
            name
            registrationNumber
            address
            statement
            memberType
        }
        document {
            id
            participantId
            name {
              label
              value
            }
            type {
              label
              value
            }
            issuedOn
            issuedBy
            indexNumbers
            seriesNumber
            linkById
        }
    }
  }
`;

export const NAME_CASE = gql`
    query nameCase($name: [String]) {
      nameGender(name: $name)
      nameCase(name: $name)
    }
`;

