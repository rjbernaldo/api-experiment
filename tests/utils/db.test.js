const test = require('tape');
const db = require('../../utils/db');

test('db', t => {
  t.plan(2);
  
  db.connect(_db => {
    t.ok(_db, 'should create a new connection');
    t.ok(db.getDb(), 'should return the existing connection');
    
    _db.close();
  })
});