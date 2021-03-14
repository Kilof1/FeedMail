const Db = require('./src/Db');
const config = require('config');
const app = require('./src/app');
require('dotenv').config();

const Database = new Db;

Database.connect();

const port = process.env.PORT || config.get('port');

app.listen(port, () => console.log(`Listening on port ${port}`));

