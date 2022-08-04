var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
const SMTP_config = require('../bin/SMTP')


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Solicitação' })
})

router.get('/', (req, res) => {
  res.sendFile("./views/index");
});

router.post('/' , (req, res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "suporte@fapesc.sc.gov.br",
      pass: "F@pesc7650" /* uZ0Pp|VC */
    },
  })
  const mailOptions = {
    from: req.body.user,
    to: req.body.email,
    subject: req.body.subject,
    text: req.body.message
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email enviado: ' + info.response);
      res.send('success')
    }
  })
})

router.get('/logout', function(req, res) {
  console.log("logged out!");
  req.logout();
  res.redirect('/');
});

module.exports = router;
