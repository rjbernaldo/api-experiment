const test = require('tape');
const db = require('../../utils/db');

test('db', t => {
  t.plan(2);
  
  db.connect(database => {
    t.ok(db);
    t.ok(db.getDb());
    
    database.close();
  })
})