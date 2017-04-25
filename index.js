const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const controllers = require('./controllers');
const db = require('./utils/db');

app.use(bodyParser.json());
app.use(controllers);

db.connect(() => {
  app.listen(PORT, () => {
    console.log('App listening at PORT ' + PORT);
  });
});