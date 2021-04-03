const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeMail = (email, name) => {
  sgMail.send({
    to: email,
    from: "pedroveed@gmail.com",
    subject: "Teste Subject",
    text: `Test body of the email, bem-vindo + ${name}`,
    html:`<h1>Olá, ${name}.</h1><p>Bem-vindo à livraria</p>`
  }).then(() => {
    console.log('Email sent');
  })
  .catch((error) => {
    console.log(error);
  })
}

module.exports = sendWelcomeMail;