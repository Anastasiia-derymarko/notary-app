const { DataSource } = require('apollo-datasource');

class ContractApi extends DataSource {
    constructor({ store }) {
        super();
        this.store = store;
    }
    async findAllContracts() {
        const response = await this.store.contracts.findAll();
        return response;
    }

    contractReducer(mainParameters, contract) {
        console.log(contract.contractType);
        return {
            id: contract.id,
            [mainParameters]: {
                contractType: contract.contractType,
                data: contract.data,
                object: contract.object
            },

        };
    }

    async contractById({ id }) {
        const response = await this.store.contracts.findAll({where: { id }});
        return this.contractReducer('mainParameters', response[0]);
    }
    async priceByContractId({ contractId }) {
        const response = await this.store.price.findAll({where: { contractId }});
        console.log(response[0]);
        return response[0];
    }
    async changeContract ({id, input}) {

        return !!await this.store.contracts.update(
            input,
            { where: { id } }
        );
    }
}

module.exports = ContractApi;