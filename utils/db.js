var MongoClient = require('mongodb').MongoClient;
var url = process.env.DB_PATH;
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