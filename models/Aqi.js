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
  },
  aggregate: (timeframe, cb) => {
    _db = db.getDb();
    
    var start = new Date();
    if (timeframe == 'day') start = new Date(new Date().setDate(start.getDate() - 1));
    if (timeframe == 'week') start = new Date(new Date().setDate(start.getDate() - 7));
    
    if (timeframe === 'day') {
      _db.collection('api-experiment').aggregate(
        [
          {
            $match: {
              'data.time.v': {
                $gt: start.getTime()
              }
            }
          },
          {
            $group: {
              _id : { 
                hour: { 
                  $hour: {
                    $add: [new Date(0), "$data.time.v"]
                  } 
                } 
              },
              averageAqi: { $avg: "$data.aqi" },
              count: { $sum: 1 }
            }
          }
        ]
      ).toArray((err, docs) => {
        cb(docs);
      });
    } else if (timeframe === 'week') {
      _db.collection('api-experiment').aggregate(
        [
          {
            $match: {
              'data.time.v': {
                $gt: start.getTime()
              }
            }
          },
          {
            $group: {
              _id : { 
                day: { 
                  $dayOfMonth: {
                    $add: [new Date(0), "$data.time.v"]
                  } 
                }, 
                month: { 
                  $month: {
                    $add: [new Date(0), "$data.time.v"] 
                  } 
                }
              },
              averageAqi: { $avg: "$data.aqi" },
              count: { $sum: 1 }
            }
          }
        ]
      ).toArray((err, docs) => {
        cb(docs);
      });
    } else {
      _db.collection('api-experiment').find().toArray((err, docs) => {
        cb(docs);
      });
    }
  }
}