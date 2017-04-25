const db = require('../utils/db');

module.exports = {
  find: (start, end, cb) => {
    _db = db.getDb();
    
    _db.collection('api-experiment').find({}).toArray((err, docs) => {
      cb(docs);
    })
  }
};