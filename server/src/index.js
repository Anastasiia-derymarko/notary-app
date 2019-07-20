const { ApolloServer } = require('apollo-server')

const typeDefs = require('./schema');
const { createStore } = require('./store');

const ContractAPI = require('./dataSources/contractApi');

const store = createStore();
const resolver = require('./resolvers');
const GraphQLJSON = require('graphql-type-json');

const server = new ApolloServer({
    typeDefs,
    resolvers:[resolver, {JSON: GraphQLJSON}],
    dataSources: () => ({
        contractAPI: new ContractAPI({ store })
    })
});

server.listen(4002).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
