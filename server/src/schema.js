const { gql } = require('apollo-server');

const typeDefs = gql`
    scalar JSON 
    
    type Query {
      contracts: [Contract]
      contract(id: ID!): Contract
      price(contractId: ID!): Price
    }
    type Contract {
        id: ID!
        mainParameters: MainParameters
    }     
    type MainParameters {
        contractType: TypeContract
        data: String
        object: TypeContract
    }
    type Price {
        contractId: ID!
        appraisalValue: Float
        conclusion: String
        issuedBy: String
        issuedOn: String
        priceObject: Float
    }
    type TypeContract {
        label: String
        value: String
    }
    input ContractInput {
        contractType: JSON
        data: String
        object: JSON
    }
    type Mutation {
        changeContract(id: ID!, input:ContractInput): ContractUpdateResponse
    }
    type ContractUpdateResponse{
        success: Boolean!
        message: String
        contract: Contract
    }
`;

module.exports = typeDefs;
