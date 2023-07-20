const express = require('express');
require('dotenv').config();

const cors = require('cors')

const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const connectDB = require('./db');
connectDB();

const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use('/', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}));
app.listen(port,console.log(`Server is running on port: ${port}`))
