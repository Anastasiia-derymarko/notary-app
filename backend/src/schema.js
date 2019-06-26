const { gql } = require('apollo-server');

const typeDefs = gql`
    scalar JSON 
    
    type Query {
      contracts: [Contract]
      contract(id: ID!): Contract
    }
    type Contract {
        id: ID!
        type: TypeContract
        data: String
        object: TypeContract
    }     
    type TypeContract {
        label: String
        value: String
    }
    input ContractInput {
        type: JSON
        data: String
        object: JSON
    }
    type Mutation {
        changeContract(id: ID!, input:ContractInput): ContractUpdateResponse!
    }
    type ContractUpdateResponse{
        success: Boolean!
        message: String
        contract: Contract
    }
`;

module.exports = typeDefs;
