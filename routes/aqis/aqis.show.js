const data = require('data.json');

module.exports = (req, res) => {
  let aqis = data; // TODO: retrieve data from db
  let id = req.params.id;
  let aqis = aqis.filter(aqi => aqi.id === id);
  
  res.status(200).json({ aqis })
};