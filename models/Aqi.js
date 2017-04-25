const db = require('../utils/db');

module.exports = {
  findBetween: (start, end, cb) => {
    _db = db.getDb();
    
    _db.collection('api-experiment').find({
      'data.date.time.v': { $gt: start },
      'data.date.time.v': { $lt: end },
    }).toArray((err, docs) => {
      cb(docs);
    });
  }
};