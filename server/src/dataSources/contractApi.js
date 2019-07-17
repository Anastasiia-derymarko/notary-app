const { DataSource } = require('apollo-datasource');

class ContractApi extends DataSource {
    constructor({ store }) {
        super();
        this.store = store;
    }

    async contractById({ id, info }) {
        const include = ['addressAndFootage', 'price'];
        // let possibleName = ['addressAndFootage', 'price'];


        // if (info.parentType == 'Mutation'){
        //     for (let key in info.variableValues.input){
        //        if (key != 'mainParameters'){
        //            include.push(key);
        //        }
        //     }
        // }else {
        //     const rootSelection = info.operation.selectionSet.selections[0];
        //
        //     rootSelection.selectionSet.selections.forEach(({ name: { value } }) => {
        //         if(possibleName.includes(value)){
        //             include.push(value);
        //         }
        //     });
        // }
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