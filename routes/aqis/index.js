const routes = require('express').Router();

// NOTE: Namespacing under 'aqis' to avoid conflicts
const aqis = {
  index: require('./aqis.index'),
  show: require('./aqis.show')
};

// NOTE: Only implementing index and show for now
routes.get('/', aqis.index);
routes.get('/:id', aqis.show);
// routes.post('/', aqis.create);
// routes.put('/:id', aqis.update);
// routes.delete('/:id', aqis.delete)

module.exports = routes;