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
    async contractById({ id }) {
        const response = await this.store.contracts.findAll({where: { id }});
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