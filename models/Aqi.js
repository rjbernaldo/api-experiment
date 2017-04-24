const db = require('../utils/db').getDb()

module.exports = {
  find: (cb) => {
    db.collection('aqis').find({}).toArray((err, docs) => {
      cb(docs);
    })
  }
}