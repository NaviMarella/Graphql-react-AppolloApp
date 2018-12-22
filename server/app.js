const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross origin requests
app.use(cors());

mongoose.connect('mongodb://NaviMarella:test123@ds155293.mlab.com:55293/graphql-react')
mongoose.connect('open', () => {
    console.log('Connected to Database');
});
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("Listening on port 4000");
})