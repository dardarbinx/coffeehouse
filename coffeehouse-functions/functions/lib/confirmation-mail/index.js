"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
/* Google Config
   firebase functions:config:set gmail.email="email" gmail.password="supersecretpassword"
*/
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    }
});
const APP_NAME = 'Coffee House';
exports.listener = functions.firestore.document('/reservations/{uid}').onCreate((event) => {
    const data = event.data.data();
    const mailOptions = {
        from: `"${APP_NAME}"`,
        to: data.emailAddress
    };
    // Building Email message.
    mailOptions.subject = `Your reservation for ${data.date}`;
    mailOptions.text =
        `Dear ${data.displayName},

Thanks for making a reservation. Here are your reservation details:
Date: ${data.date}, at ${data.hour}
Number of guests: ${data.guests}.
Comments: ${data.comments}

See you soon!

${APP_NAME}`;
    return mailTransport.sendMail(mailOptions)
        .then(() => console.log(`Reservation email sent to:`, data.email))
        .catch(error => console.error('There was an error while sending the email:', error));
});
//# sourceMappingURL=index.js.map