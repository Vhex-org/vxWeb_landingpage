const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();

sgMail.setApiKey(`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`);

app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the Sendgrid Email Server');
});

app.listen(4567, () => console.log("running on port 4567"));

app.get('/send-email-vhex', (req, res) => {
    res.send('Welcome to the Sendgrid Email Server');

    const { recipient, sender, topic, text } = req.query;

    var customerInfo = "Customer's Email: " + recipient + "\n\nMessage:\n";

    const msg = {
        to: "vhex.eip@gmail.com",
        from: sender,
        subject: topic,
        text: customerInfo + text,
    }

    sgMail.send(msg)
    .then((msg) => console.log(text))
});

app.get('/send-email-customer', (req, res) => {
    res.send('Welcome to the Sendgrid Email Server');

    const { recipient, sender, topic, text, firstname, lastname } = req.query;

    var welcomeMe = "Hello " + firstname + " " + lastname + ",\n\n";

    const msg = {
        to: recipient,
        from: sender,
        subject: topic,
        text: welcomeMe + text,
    }

    sgMail.send(msg)
    .then((msg) => console.log(text))
});
