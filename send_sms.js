require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_ID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: process.env.TWILIO_TEST_NUMBER,
     to: process.env.TWILIO_AUTHENTICATED_NUMBER
   })
  .then(message => console.log(message.sid));