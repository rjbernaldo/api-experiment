const test = require('tape');
const seed = require('../../utils/seed');
const Aqi = require('../../models/Aqi');

test('Aqi', t => {
  t.plan(1);
  
  seed.populateDb('month', () => {
    var withinDate = true;
    let lastMonth = new Date(new Date().getDate - 30);
    let today = new Date();
    
    Aqi.findBetween(lastMonth, today, (aqis) => {
      aqis.forEach((aqi) => {
        if (withinDate) {
          if (aqis[0].data.time.v < lastMonth.getTime()) withinDate = false;
          if (aqis[0].data.time.v > today.getTime()) withinDate = false;
        }
      });
    });
    
    t.ok(withinDate, 'should be able to filter by date');
  });
});