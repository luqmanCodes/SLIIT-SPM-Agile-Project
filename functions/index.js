const functions = require('firebase-functions');
//const nodemailer = require('nodemailer');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.emailFormI = functions.https.onRequest((req,res) => {
    if(req.method === "POST") {
        nodemailer.createTestAccount((err, account) => {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'gmail',
                auth: {
                    user: 'sliit.projects.16@gmail.com', // generated ethereal user
                    pass: 'sliit4ever' // generated ethereal password
                }
            });
        
            // setup email data with unicode symbols
            let mailOptions = {
                from: 'sliit.projects.16@gmail.com', // sender address
                to: req.body.email, // list of receivers
                subject: req.body.subject, // Subject line
            };
        
            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            });
        });
    }
    else {
        res.send(400);
    }
})
