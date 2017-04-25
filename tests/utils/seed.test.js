const test = require('tape');
const seed = require('../../utils/seed');
const db = require('../../utils/db');

test('seed util', t => {
  t.plan(6);
  
  seed.populateDb(null, (data) => {
    t.equals(data.length, 1, 'should populate db with a single entry');
    
    db.remove('api-experiment');
  });
  
  seed.populateDb('month', (data) => {
    t.notEquals(data.length, 1, 'should populate db with a months worth of entries');
    
    db.remove('api-experiment');
  });
  
  let result = seed.generateData();
  t.ok(result.data, 'data should exist')
  t.ok(result.data.aqi, 'aqi should exist');
  t.ok(result.data.time.s, 'string time should exist');
  t.ok(result.data.time.v, 'unix time should exist');
});