const data = require('data.json');

module.exports = (req, res) => {
  let aqis = data; // TODO: retrieve data from db
  let timeframe = req.params.timeframe;
  
  if (timeframe) {
    // TODO: fix filter
    // let last = (timeframe === 'day') ? 1dayago : 1weekago;
    
    // aqis = aqis.filter(aqi => {
    //   aqi.time > last
    // });
    
    // TODO: aggregate data based on hour/24hours
  } else {
    res.status(200).json({ aqis });
  }
};