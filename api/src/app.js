const express = require('express');
const db = require('./models/db');

const app = express();
const port = 5000;

app.use(require('./routes/lobby'));

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }

  db.connect()
    .then(() => console.log(`Server is listening on ${port}`));

  return true;
});
