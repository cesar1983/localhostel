function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  var hour = date.getHours();
  var minuts = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()

  return `${hour}:${minuts} ${day} ${monthNames[monthIndex]} ${year}`
}

const functions = require('firebase-functions');

const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase);

const SENDGRID_API_KEY = functions.config().sendgrid.key;

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

exports.firestoreEmail = functions.firestore
  .document('emailLeads/{emailLeadId}')
  .onCreate((snap, context) => {

    console.log('snap');
    console.log(snap);

    console.log('context');
    console.log(context);

    const dateCreated = new Date();

    const emailLeadId = context.params.emailLeadId;

    const db = admin.firestore()

    return db.collection('emailLeads').doc(emailLeadId)
      .get()
      .then(doc => {

        const emailLead = doc.data();
        const subject = `Novo contato vindo do site | ${formatDate(dateCreated)}`;

        const msgInfoClient = {
          to: 'reservas@localhostel.com.br',
          from: 'novo-cotato@localhostel.com.br',
          subject: subject,

          templateId: 'cbe41d1d-eb0f-4fa1-99a6-dde7c079001f',
          substitutionWrappers: ['{{', '}}'],
          substitutions: {
            name: emailLead.name,
            message: emailLead.message,
            email: emailLead.email,
            subject: subject
          }
        };

        const msgLuciano = {
          to: 'lkrebs05@gmail.com',
          from: 'novo-cotato@localhostel.com.br',
          subject: subject,

          templateId: 'cbe41d1d-eb0f-4fa1-99a6-dde7c079001f',
          substitutionWrappers: ['{{', '}}'],
          substitutions: {
            name: emailLead.name,
            message: emailLead.message,
            email: emailLead.email,
            subject: subject
          }
        };

        console.log(msgInfoClient);
        sgMail.send(msgInfoClient);

        return sgMail.send(msgLuciano);

      })
      .then(() => console.log('message sent'))
      .catch(err => console.log(err))

  })