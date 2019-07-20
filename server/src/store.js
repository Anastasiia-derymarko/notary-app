const SQL = require('sequelize');

module.exports.createStore = () => {

    const db = new SQL('notaryapp', 'root', 'root', {
        host: '127.0.0.1',
        logging: false,
        dialect: 'mysql',
    });

    const contract = db.define('contract', {
        id: {
            type: SQL.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        contractType: SQL.JSON,
        data: SQL.STRING,
        object: SQL.JSON,
    }, {timestamps: false});

    const price = db.define('price', {
        appraisalValue: SQL.INTEGER,
        conclusion: SQL.STRING,
        issuedBy: SQL.STRING,
        issuedOn: SQL.STRING,
        priceObject: SQL.INTEGER
    }, {timestamps: false});

    contract.hasOne(price);
    price.belongsTo(contract);

    const addressAndFootage = db.define('addressAndFootage', {
        region: SQL.JSON,
        area: SQL.JSON,
        city: SQL.JSON,
        street: SQL.JSON,
        typeBuilding: SQL.JSON,
        numberBuildingValue: SQL.STRING,
        typeObjectValue: SQL.JSON,
        numberObjectValue: SQL.STRING,
        numberOfRooms: SQL.INTEGER,
        totalArea: SQL.STRING,
        livingArea: SQL.STRING,
    }, {timestamps: false});

    contract.hasOne(addressAndFootage);
    addressAndFootage.belongsTo(contract);

    const participant = db.define('participant', {
        id: {
            type: SQL.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        contractId: SQL.INTEGER,
        linkById:SQL.INTEGER,
        name:SQL.STRING,
        registrationNumber:SQL.STRING,
        address:SQL.STRING,
        statement: SQL.BOOLEAN,
        memberType: SQL.STRING,
    }, {timestamps: false});

    contract.hasOne(participant);
    participant.belongsTo(contract);

    const document = db.define('document', {
        id: {
            type: SQL.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        contractId: SQL.INTEGER,
        participantId: SQL.INTEGER,
        name: SQL.JSON,
        type: SQL.JSON,
        issuedOn: SQL.STRING,
        issuedBy: SQL.STRING,
        indexNumbers: SQL.STRING,
        seriesNumber: SQL.STRING,
        linkById: SQL.INTEGER
    },{timestamps: false});

    contract.hasOne(document);
    document.belongsTo(contract);

    return { contract, price, addressAndFootage, participant, document};
};
