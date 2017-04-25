const Aqi = require('../../models/Aqi');

module.exports = (req, res) => {
  let timeframe = req.query.timeframe;
  
  Aqi.aggregate(timeframe, (aqis) => {
    res.status(200).json({ aqis });
  })
};