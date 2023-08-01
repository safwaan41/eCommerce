const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection'); // replaces sql
const app = express(); //app instead of express().
const PORT = process.env.PORT || 3001;
// http://localhost:3001/api

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});