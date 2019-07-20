const { gql } = require('apollo-server');

const typeDefs = gql`
    scalar JSON 
    
    type Query {
      contract(id: ID!): Contract
      participant(id: ID!): [Participant]
      nameCase(name: String!): [String]
      nameGender(name: String!): String
    }
    type Contract {
        id: ID!
        mainParameters: MainParameters
        price: Price
        addressAndFootage: AddressAndFootage
        participant: [Participant]
        document: [Document]
    }     
    type MainParameters {
        contractType: TypeContract
        data: String
        object: TypeContract
    }
    type Price {
        appraisalValue: Int
        conclusion: String
        issuedBy: String
        issuedOn: String
        priceObject: Int
    }
    type AddressAndFootage {
        region: TypeContract
        area: TypeContract
        city: TypeContract
        street: TypeContract
        typeBuilding: TypeContract
        numberBuildingValue: String
        typeObjectValue: TypeContract
        numberObjectValue: String
        numberOfRooms: Int
        totalArea: String
        livingArea: String
    }
    
    type Participant {
        id: ID!
        contractId:ID
        linkById: ID
        name: String
        registrationNumber: String
        address: String
        statement: Boolean
        memberType: String
    }
    type Document {
        id: ID!
        contractId:ID
        participantId:ID
        linkById: ID
        name: TypeContract
        type: TypeContract
        issuedOn: String
        issuedBy: String
        indexNumbers: String
        seriesNumber: String
    }
    type TypeContract {
        label: String
        value: String
    }
    type NameCase {
        name: String
    }
    input MainParametersInput {
        contractType: JSON
        data: String
        object: JSON
    }
    input PriceInput {
        appraisalValue: Int
        conclusion: String
        issuedBy: String
        issuedOn: String
        priceObject: Int
    }
    input AddressAndFootageInput {
        region: JSON,
        area: JSON,
        city: JSON,
        street: JSON,
        typeBuilding: JSON,
        numberBuildingValue: String,
        typeObjectValue: JSON,
        numberObjectValue: String,
        numberOfRooms: String,
        totalArea: String,
        livingArea: String,
    }
    input ParticipantInput {
        id: ID!
        name: String
        registrationNumber: String
        address: String
        statement: Boolean
        memberType: String
    }
    input DocumentInput {
        id: ID!
        name: JSON
        type: JSON
        issuedOn: String
        issuedBy: String
        indexNumbers: String
        seriesNumber: String
        linkById: Int
    }
    input ContractInput {
        mainParameters: MainParametersInput
        price: PriceInput
        addressAndFootage: AddressAndFootageInput         
        participant: ParticipantInput
        document: DocumentInput
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
