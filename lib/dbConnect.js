const MongoClient = require('mongodb');


const connectionURL = process.env.MONGODB_URI || 'mongodb://localhost/yoda';

function getDB() {
  return MongoClient.connect(connectionURL);
}

module.exports = {
  getDB,
};
