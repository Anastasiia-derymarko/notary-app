
module.exports = {
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
            console.log('changeContract');
            if (!result)
                return {
                    success: false,
                    message: 'failed to update contract',
                };

            const contract = await dataSources.contractAPI.contractById({id});

            return {
                success: true,
                message: 'contract update',
                contract: contract,
            };
        }
    },
};
