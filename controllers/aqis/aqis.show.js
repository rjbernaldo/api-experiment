const Aqi = require('../../models/Aqi');

module.exports = (req, res) => {
  let id = req.params.id;
  
  Aqi.find({ 'id': id }, (aqis) => {
    res.status(200).json({ aqis });
  });
};