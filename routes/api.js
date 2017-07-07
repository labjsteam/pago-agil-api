var express = require('express');
var router = express.Router();

var { 
	APIController, 
	MessageController 
} = require('../controllers');

router.get('/', APIController.init);

router.post('/message', MessageController.send);

module.exports = router;