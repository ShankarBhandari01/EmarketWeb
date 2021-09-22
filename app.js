
const express = require("Express");
const bodyParser = require("body-parser");
const cors = require('cors');// to authorise the request from user or control the user request 


var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors())
const user_route = require('./route/UserRoute');
require('./database/db');

app.use(express.static('pictures'));
app.use(user_route);

var server=app.listen(90, function (req, res) {
    console.log('Listening to request on port 90');
});
