const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
ROUTES
*/

app.listen(3000, () => console.log('Listening on port 3000'));
