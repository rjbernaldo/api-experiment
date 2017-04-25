const test = require('tape');
const seed = require('../../../utils/seed');
const db = require('../../../utils/db');

test('aqis controller', t => {
  t.plan(2);
  
  seed.populateDb('month', () => {
    t.ok(false, 'should be able to aggregate data for a day with an hour resolution');
    
    t.ok(false, 'should be able to aggregate data for week with a week resolution');
  });
});