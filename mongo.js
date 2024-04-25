const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb+srv://ameya000:ameya000@ameya.1ynyseo.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';
const db = client.db(dbName);
const collection = db.collection('documents');

