const db = require('./db');

module.exports = {
  populateDb: (timeframe, cb) => {
    var entries = 1;
    var data = [];
    
    if (timeframe === 'month') entries = 1000;
    
    for (var i = 0; i < entries; i++) {
      data.push(generateData());
    }
    
    db.connect(_db => {
      _db.collection('api-experiment').insert(data, (err, result) => {
        cb(result.ops);
        
        _db.close()
      });
    });
  },
  generateData: generateData
};

function generateData() {
    let aqi = Math.ceil(Math.random(1) * 100);
    var today = new Date();
    let time = randomDate(today, new Date(new Date().setDate(today.getDate()-30)));
    
    // http://aqicn.org/json-api/doc/
    return {
      status: "ok",
      data: {
        aqi: aqi,
        idx: 5771,
        attributions: [
          {
            url: "http://www.luchtmeetnet.nl/",
            name: "RIVM - Rijksinstituut voor Volksgezondheid en Milieum, Landelijk Meetnet Luchtkwaliteit"
          }
        ],
        city: {
          geo: [
            52.3702157,
            4.8951679
          ],
          name: "Amsterdam",
          url: "http://aqicn.org/city/amsterdam/"
        },
        dominentpol: "pm25",
        iaqi: {
          "co": {
            "v": 4.1
          },
          "h": {
            "v": 70
          },
          "no2": {
            "v": 17.1
          },
          "o3": {
            "v": 8.6
          },
          "p": {
            "v": 1018
          },
          "pm10": {
            "v": 22
          },
          "pm25": {
            "v": 45
          },
          "so2": {
            "v": 1.1
          },
          "t": {
            "v": 6.34
          }
        },
        time: {
          s: time.toString(),
          tz: "+01:00",
          v: time.getTime()
        }
      }
    };
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}