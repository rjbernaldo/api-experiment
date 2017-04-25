const test = require('tape');
const seed = require('../../utils/seed');
const db = require('../../utils/db');
const Aqi = require('../../models/Aqi');

test('Aqi model', t => {
  t.plan(4);
  
  seed.populateDb('month', () => {
    var withinDate = true;
    let today = new Date();
    let yesterday = new Date(new Date().setDate(today.getDate() - 1));
    
    db.connect(() => {
      Aqi.findBetween(yesterday, today, (aqis) => {
        aqis.forEach((aqi) => {
          if (withinDate) {
            if (aqi.data.time.v < yesterday.getTime()) withinDate = false;
            if (aqi.data.time.v > today.getTime()) withinDate = false;
          }
        });
        
        t.ok(withinDate, 'should be able to filter by date');
        
        Aqi.aggregate(null, (aqis) => {
          t.equals(aqis.length, 1000, 'should be able to return all documents');
          
          Aqi.aggregate('day', (aqis) => {
            t.ok(aqis.length > 0 && aqis.length <= 24, 'should be able to return documents within the last day aggregated with an hourly resolution');
            // sample: { _id: { hour: 5 }, averageAqi: 50.51282051282051, count: 39 }
            
            Aqi.aggregate('week', (aqis) => {
              t.ok(aqis.length > 0 && aqis.length <= 31, 'should be able to return documents within the last week aggregated with a daily resolution');
              // { _id: { day: 22, month: 4 }, averageAqi: 49.048780487804876, count: 41 },
              
              db.remove('api-experiment');
              db.getDb().close()
            });
          });
        });
      });
    });
  });
});