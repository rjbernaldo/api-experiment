const routes = express.Router();
const aqis = require('./aqis')

// NOTE: aqis === air quality indexes
routes.use('/aqis', aqis);
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'OK' })
});

module.exports = routes;
