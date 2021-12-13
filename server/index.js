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

app.get('/send-email', (req, res) => {
    res.send('Welcome to the Sendgrid Email Server');

    const { recipient, sender, topic, text } = req.query;

    const msg = {
        to: recipient,
        from: sender,
        subject: topic,
        text: text,
    }

    sgMail.send(msg)
    .then((msg) => console.log(text))
});
