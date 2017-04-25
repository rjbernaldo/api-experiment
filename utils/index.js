const seed = require('./seed');

seed.populateDb('month', (aqis) => {
  console.log(`DB populated with ${aqis.length} entries`);
});