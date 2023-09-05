
require('dotenv').config()

const express = require('express');
const routes = require('./Develop/routes');
const sequelize = require('./config/connection')//I added this....
// const sequelize = require('./models'); // Correct relative path


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({force: false}).then(() =>{// sync sequelize models to the database, then turn on the server
  console.log('DB Synced')
app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}!`);
});
})


