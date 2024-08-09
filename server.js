const express = require('express');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes =  require('./routes/apiRoutes');

const PORT = 3001;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
  );  