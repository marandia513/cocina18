const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para el registro
app.post('/register', (req, res) => {
  const { username, email } = req.body;

  // Configurar el transportador de correo
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Confirmación de registro',
    text: `Hola ${username}, gracias por registrarte en nuestro sitio.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Correo enviado');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
