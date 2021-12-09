const express = require('express');
const mongooseConnection = require('./config/connections'); 
// const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001

const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// keep at bottom 

mongooseConnection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
})