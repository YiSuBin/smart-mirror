var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: 'tnqls5894@gmail.com',
	    pass: 'Sklee7289!'
	}
});
	 
var timerId;
	 
module.exports.sendEmail = function(file) {
	if (timerId) return;
	 
	timerId = setTimeout(function() {
	    clearTimeout(timerId);
	    timerId = null;
	}, 10000);
	 
	console.log('Sendig	an Email..');
	 /*'<b>안녕하세요</b>,<br/><br/>사진(동영상)을 확인해주세요.<br/>스마트 미러<br/><br/> Smart Mirror : ' + Date() + ' <br/><br/>Dear,<br/><i>Smart Mirror</i>'*/
	var mailOptions = {
	    from: 'Smart Mirror <tnqls5894@gmail.com>',
	    to: 'ppk7536@gmail.com',
	    subject: 'Smart mirror',
	    html: '',
	    attachments: [{
	      path:file
	    }]
	};
	 
	transporter.sendMail(mailOptions, function(error, info) {
	    if (error) {
	    	console.log(error);
	    } else {
	    	console.log('Message sent: ' + info.response);
	    }
	});
}