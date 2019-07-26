const execPhp = require('exec-php');
const NameCase = require('./dataSources/nameCase');
module.exports = {
    Query: {
        contract: (_, { id }, { dataSources }) => {
            return dataSources.contractAPI.contractById({ id });
        },
        nameCase: async (_, { name }) => {
            const result = await NameCase(name, "name_case");

            return result.flat();
        },
        nameGender: (_, { name }) => {
            return NameCase(name, "name_gender")
        }
    },
    Contract: {
      mainParameters: (contract) => {
          return {
              contractType: contract.contractType,
              data: contract.data,
              object: contract.object
          }
      },
      participant: (contract, _, { dataSources }) => {
          return dataSources.contractAPI.findAllByContractId({ id:contract.id, nameTable:'participant' });
      },
      document: (contract, _, { dataSources }) => {
          return dataSources.contractAPI.findAllByContractId({ id:contract.id, nameTable:'document' });
      }
    },
    Mutation: {
        changeContract: async (_, {id, input}, { dataSources }, info) => {

            const result = await dataSources.contractAPI.changeContract({id, input});

            if (!result)
                return {
                    success: false,
                    message: 'failed to update contract',
                };

            const contract = await dataSources.contractAPI.contractById({id, info});

            return {
                success: true,
                message: 'contract update',
                contract: contract,
            };
        },
    },
};
