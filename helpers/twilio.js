var accountSid = 'ACd89adbbc02787f5ff5e2fb4da397a6a4'; 
var authToken = 'e02ee71ebca1a85f28c59806203948f2'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
var twilio = {
	sms: function (to, code, res) {
		client.messages.create({ 
		    to: to, 
		    from: "+17606426890 ", 
		    body: "Tu código de verificación para tu registro en Pago Ágil es " + code,
		}, function(err, message) { 
			if (err) {
				return res.send(err);
			}
			return res.json({ "result": "success" });
		});
	}
};

module.exports = twilio;