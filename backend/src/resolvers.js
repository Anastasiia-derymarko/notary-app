const GraphQLJSON = require('graphql-type-json');

module.exports = {
    JSON: GraphQLJSON,
    Query: {
        contracts: (_, __, {dataSources}) => {
            return dataSources.contractAPI.findAllContracts();
        },
        contract: (_, {id}, {dataSources}) => {
            return dataSources.contractAPI.contractById({id});
        },
    },
    Mutation: {
        changeContract: async (_, {id, input}, { dataSources }) => {
            const result = await dataSources.contractAPI.changeContract({id, input});

            if (!result)
                return {
                    success: false,
                    message: 'failed to update contract',
                };

            const contract = await dataSources.contractAPI.contractById({id});
            console.log(contract);
            return {
                success: true,
                message: 'contract update',
                contract: contract,
            };
        }
    },
};
