const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'front-end/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'front-end/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw Error;

  console.log(`Listening on port: ${port}`);
});
