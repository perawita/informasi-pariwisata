const accountSid = process.env.TWHILIO_ACCOUNT_SID;
const authToken = process.env.TWHILIO_ACCOUNT_TOKEN;
const client = require('twilio')(accountSid, authToken);

export default function Twilio() {
    const send_wa = async (data) =>{
        const massage = `Hai invoice anda adalah ${data.invoice}`;
        client.messages
            .create({
                from: process.env.TWILIO_NUMBER,
                to: data.number,
                body: massage
            })
            .then(message => console.log(message.sid))
            .done();
    }

    return {send_wa}
}