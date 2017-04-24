const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = express.Router();
const PORT = process.env.PORT || 3000;
const db = require('./utils/db');

app.use(bodyParser.json());
app.use(routes);

db.connect(() => {
  app.listen(PORT, () => {
    console.log('App listening at PORT ' + PORT)
  });
})


