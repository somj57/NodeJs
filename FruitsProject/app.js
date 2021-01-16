//npm init
//npm install mongodb

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Replace the uri string with your MongoDB deployment's connection string.....
const url ="mongodb://localhost:27017";

const dbname = "fruitsDB";

const client = new MongoClient(url);

client.connect(function(err){
  assert.equal(null, err);
  console.log("Connected To MongoDB Server")
  const db = client.db(dbName);

  client.close();
});
