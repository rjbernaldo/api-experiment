const test = require('tape');
const seed = require('../../utils/seed');
const db = require('../../utils/db');
const Aqi = require('../../models/Aqi');

test('Aqi', t => {
  t.plan(1);
  
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
        db.remove('api-experiment');
        db.getDb().close()
      });
    });
  });
});