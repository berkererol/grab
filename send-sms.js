//TWILIO TEST
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const phoneNumber = process.env.PHONE_NUMBER;
const twiloMessage = (body,to) => {

  const client = require('twilio')(accountSid, authToken);
  return client.messages
    .create({
      body: body,
      from: phoneNumber,
      to: `${to}`
    })
    .then(message => console.log(message.sid))
    .catch(err => {
      console.log(err);
    });


};
module.exports = twiloMessage;
