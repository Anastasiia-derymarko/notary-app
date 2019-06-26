const { ApolloServer } = require('apollo-server')

const typeDefs = require('./schema');
const { createStore } = require('./store');

const ContractAPI = require('./dataSources/contractApi');

const store = createStore();
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        contractAPI: new ContractAPI({ store })
    })
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
