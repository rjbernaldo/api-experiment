const db = require('../utils/db');

module.exports = {
  find: (cb) => {
    _db = db.getDb();
    
    _db.collection('api-experiment').find({}).toArray((err, docs) => {
      cb(docs);
    })
  }
}