const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = express.Router();
const PORT = process.env.PORT || 3000;

// TODO: connect to db

app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => {
  console.log('App listening at PORT ' + PORT)
});
