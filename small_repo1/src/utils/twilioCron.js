import { accountSid, authToken } from '../config/serverConfig.js';
import twilio from 'twilio';
const client = twilio(accountSid, authToken);

export const call = () =>{
    client.messages
  .create({
    body: 'Hello from twilio-node',
    to: '+919720943003', // Text your number
    from: '+919720943003', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
};