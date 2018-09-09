const functions = require('firebase-functions');
//const nodemailer = require('nodemailer');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.emailFormI = functions.https.onRequest((req,res) => {
    res.send('hello');
})
