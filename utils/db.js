const MongoClient = require('mongodb').MongoClient;
const url = process.env.DB_PATH;
var _db;

module.exports = {
  connect: (cb) => {
    MongoClient.connect(url, (err, db) => {
      _db = db;
      
      cb(_db)
    });
  },
  getDb: () => {
    return _db;
  }
}