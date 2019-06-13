var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('notaryapp', 'root', 'root', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

const region = sequelize.define('region', {
    id: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(255),
        allowNull: true,
        unique: true
    }
});

region.findAll({raw: true}).then(region=> {
    region;
});


// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    city: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  city: () => {
    return 'test'
  }
};
console.log(root);

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(5000);
console.log('Running a GraphQL API server at localhost:5000/graphql');

