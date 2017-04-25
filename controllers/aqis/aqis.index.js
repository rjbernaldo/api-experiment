const data = require('data.json');
const Aqi = require('../models/Aqi');

module.exports = (req, res) => {
  let timeframe = req.params.timeframe;
  
  if (timeframe) {
    Aqi.find({ 'id': id }, (aqis) => {
      res.status(200).json({ aqis })
    });
    // TODO: fix filter
    // TODO: aggregate data based on hour/24hours
    // let last = (timeframe === 'day') ? 1dayago : 1weekago;
    
    // aqis = aqis.filter(aqi => {
    //   aqi.time > last
    // });
    
  } else {
    res.status(200).json({ aqis });
  }
};