import gql from "graphql-tag";

export const UPDATE_CONTRACT = gql`
    mutation updateContract($id: ID!, $input: ContractInput) {
        changeContract(id:$id, input:$input)
            {
                 contract{
                    id
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
            }
        }
`;