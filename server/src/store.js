const SQL = require('sequelize');

module.exports.createStore = () => {

    const db = new SQL('notaryapp', 'root', 'root', {
        host: '127.0.0.1',
        logging: false,
        dialect: 'mysql',
        query:{ raw:true }
    });

    const contracts = db.define('contracts', {
        id: {
            type: SQL.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        contractType: SQL.JSON,
        data: SQL.STRING,
        object: SQL.JSON,
    },
        {timestamps: false}
    );

    return { contracts };
};
//INSERT INTO contracts SET object={label: "квартири", value: 1}, type={label: "договір купівлі-продажу", value: 1}, data= "2019-05-05"
