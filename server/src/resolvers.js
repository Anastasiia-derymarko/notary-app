const execPhp = require('exec-php');

module.exports = {
    Query: {
        contract: (_, { id }, { dataSources }, info) => {
            return dataSources.contractAPI.contractById({ id, info });
        },
        nameCase: (_, { name }) => new Promise((resolve, reject) => {
            execPhp('./bd/nameCase.php', (error, php) =>{
                if(error) {reject(error)}
                php.name_case(name, (err, result) =>{
                    if(err) reject(err)
                    resolve(result);
                });
            });
        }),
        nameGender: (_, { name }) =>new Promise((resolve, reject) => {
            execPhp('./bd/nameCase.php', (error, php) =>{

                php.name_gender(name, (err, result) =>{
                    if(err) reject(err);
                    resolve(result);
                });
            });
        })
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
