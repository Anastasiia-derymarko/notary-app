var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
// var mysql      = require('mysql');
//
// var connection = mysql.createConnection({
//     host     : '127.0.0.1',
//     user     : 'root',
//     password : 'root',
//     database : 'notaryapp',
// });
// connection.connect(function(err) {
//     if (err) throw err;
// });
//
// var queryBd = function () {
//
//     connection.query('SELECT * FROM area WHERE region_id = 1', function (error, results, fields) {
//     })
// };
console.log(true);
// connection.end();

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
    return res;
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(5000);
console.log('Running a GraphQL API server at localhost:5000/graphql');

