var twilio = require('../helpers/twilio');

var MessageController = {
	send: function (req, res) {
		var number = req.body.number;
		var verificationCode = req.body.verificationCode;

		twilio.sms(number, verificationCode, res);
	}
};

module.exports = MessageController;