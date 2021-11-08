const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'GoldTech';

// Use connect method to connect to the server
client.connect().then(() => {
    console.log('Connected successfully to mongodb database');
}).catch((err) => {
    console.log("Not Connected to Database: ", err);
    process.exit(1);
});

const db = client.db(dbName);

module.exports.db = db;
