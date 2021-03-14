const config = require('config');
const app = require('./src/app')
require('dotenv').config();

const port = process.env.PORT || config.get('port');

app.listen(port, () => console.log(`Listening on port ${port}`));

