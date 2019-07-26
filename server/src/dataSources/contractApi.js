const { DataSource } = require('apollo-datasource');

class ContractApi extends DataSource {
    constructor({ store }) {
        super();
        this.store = store;
    }

    async contractById({ id }) {
        const include = ['addressAndFootage', 'price'];

        return await this.store.contract.findOne({
            where: { id },
            ...(include ? { include } : {})
        });
    }

    async findAllByContractId ({id, nameTable}) {
        return await this.store[nameTable].findAll({
            where: {contractId: id}
        });
    }

    async changeContract ({id, input}) {
        let where;
        const name = Object.keys(input)[0];

        switch(name){
            case 'participant':
            case 'document':
                where = { where: { id:input[name].id, contractId:id }}
                delete input[name].id;
                break;
            case 'mainParameters' :
                return !!await this.store.contract.update(
                    input[name], { where: { id:id} });
                break;
            default:
                where = { where: { contractId:id }}
        }

        return !!await this.store[name].update(
           input[name], where);
    }
}

module.exports = ContractApi;