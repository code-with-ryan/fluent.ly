const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
require('dotenv').config();

app = express();
const DB_USERNAME = process.env.MONGODB_USERNAME;
const DB_PASSWORD = process.env.MONGODB_PASSWORD;

const url = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.l8pxchk.mongodb.net/?retryWrites=true&w=majority`;

app = express();
app.listen(4000);
