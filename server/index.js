const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://Brian:test123@gql-demo.w2nzc.mongodb.net/gql-demo?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('connected to DB')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {console.log('listening on port 4000')})