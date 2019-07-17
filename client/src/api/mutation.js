import gql from "graphql-tag";

export const UPDATE_CONTRACT = gql`
    mutation updateContract($id: ID!, $input: ContractInput) {
        changeContract(id:$id, input:$input){
             contract{
                id
                mainParameters {
                    object {
                      label
                      value
                    }
                    contractType {
                      label
                      value
                    }
                    data
                }    
                price {
                  appraisalValue
                  priceObject
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
                participant{
				    id
                    name
                    registrationNumber
                    address
                    statement
                    memberType
                }
                document {
                    id
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
                    registryName
                    registryIndexNumbers
                    registryIssuedOn
                }
            }
        }
    }

`;