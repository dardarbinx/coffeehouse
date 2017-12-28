import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as nodemailer from 'nodemailer';

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

export const listener = functions.firestore.document('/reservations/{uid}').onCreate((event) => {
   const data = event.data.data();

   const mailOptions: any = {
      from: `"${APP_NAME}"`,
      to: data.emailAddress
   };

   // Building Email message.
   mailOptions.subject = `Your reservation for ${data.date}`;
   mailOptions.text = 
`Dear ${data.displayName},

Thanks for making a reservation. Here are your reservation details:
Date: ${data.date}.
Number of guests: ${data.guests}.
Comments: ${data.comments}

See you soon!

${APP_NAME}`;

   return mailTransport.sendMail(mailOptions)
      .then(() => console.log(`Reservation email sent to:`, data.email))
      .catch(error => console.error('There was an error while sending the email:', error));
});
