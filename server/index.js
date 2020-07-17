const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');
const api_key = require('../api_key')

const app = express();

mongoose.connect(api_key)
mongoose.connection.once('open', () => {
    console.log('connected to DB')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {console.log('listening on port 4000')})