var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var apiRoutes = require('./routes/api');

app.set('port', process.env.PORT || 9000);

app.use('/api/v1', apiRoutes);

app.listen(app.get('port'));

console.log(`Server is running on port ${app.get('port')}`);