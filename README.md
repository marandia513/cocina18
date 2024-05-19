# cocina18
proyecto de Node javascript grupo 18 - 2024

Documentación del Sitio Web "Ollas y Fogones"
Descripción General

"Ollas y Fogones" es un sitio web dedicado a compartir recetas de cocina, con secciones específicas para distintos tipos de platos, incluyendo recetas de carnes, postres, guisos, y más. El sitio permite a los usuarios registrarse y recibir confirmaciones por correo electrónico, además de proporcionar un diseño atractivo y funcional.
Estructura de Archivos

    HTML Principal (index.html): Contiene la estructura básica de la página de inicio.
    Hojas de Estilo (styles.css, EstilosRecetas.css): Define la apariencia y el diseño del sitio.
    JavaScript (main.js, form.js): Maneja la lógica del cliente, incluyendo validaciones de formularios y animaciones.
    Backend con Node.js (server.js): Procesa el registro de usuarios y envía correos de confirmación.

index.html

Este archivo contiene la estructura básica del sitio web, incluyendo el encabezado, el menú de navegación, el contenido principal, y el pie de página.
Estructura

Encabezado:
<header class="encabezado">
  <div class="logo">
    <a href="./index.html"><img src="./img/Logo.png" alt="olla_fogones"></a>
  </div>
  <nav class="nav-list">
    <a href="contactsform.html">Contacto</a>
    <a href="registro.html">Regístrate</a>
    <a class="login" href="login.html"><button>Login</button></a>
  </nav>
</header>

Contenido Principal:
<main>
  <div class="main-image"></div>
  <div class="item1">
    <article>
      <h3>Sobre Cocina 18</h3>
      <p>Descripción de la sección...</p>
    </article>
  </div>
  <!-- Otras secciones de contenido -->
</main>

Pie de Página:
<div class="footer1">
  Ollas y fogones | 2024
  <br><br>
  <a class="icon" href="https://www.tweeter.com" target="_blank">
    <i class="fa fa-twitter" aria-hidden="true"></i>
  </a>
  <a class="icon" href="https://www.instagram.com" target="_blank">
    <i class="fa fa-instagram" aria-hidden="true"></i>
  </a>
  <a class="icon" href="https://www.facebook.com" target="_blank">
    <i class="fa-brands fa-facebook" aria-hidden="true"></i>
  </a>
  <a class="icon" href="https://www.whatsapp.com" target="_blank">
    <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
  </a>
</div>

Hojas de Estilo (styles.css, EstilosRecetas.css)

Estas hojas de estilo definen el diseño y la apariencia del sitio web, incluyendo la tipografía, los colores, el diseño de la navegación y las secciones de contenido.
styles.css

    Estilos Generales:
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: #e9e6dbc5;
}

main {
  max-width: 90%;
  min-height: 100vh;
  margin: auto;
  padding-top: 100vh;
}

Estilos del Encabezado:

.encabezado {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(131, 130, 125, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1.5s ease;
  z-index: 1000;
}

.encabezado.shrink {
  height: 70px;
  background-color: #6a6966;
  flex-direction: row;
  padding: 0 2em;
}

Estilos de la Navegación:
.nav-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  transition: all 1.5s ease;
}

.nav-container.shrink {
  justify-content: flex-end;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 1em;
  align-items: center;
  margin: 0;
  padding: 0;
}

.nav-list a {
  font-size: 1.2em;
  color: white;
  text-decoration: none;
  padding: 0.5em 1em;
  transition: background-color 1.5s ease, transform 1.5s ease;
}

.nav-list a:hover {
  transform: scale(1.1);
  background-color: #72716f75;
  border-radius: 50px;
}

.nav-list .login button {
  font-weight: 700;
  color: white;
  padding: 9px 25px;
  background: #474746;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 1.5s ease, padding 1.5s ease;
}

.nav-list .login button:hover {
  transform: scale(1.1);
}

JavaScript (main.js)

Este archivo JavaScript maneja la lógica del cliente, incluyendo la validación de formularios y las animaciones.

    Animación del Encabezado:
    
    window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    header.classList.add('shrink');
    navContainer.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
    navContainer.classList.remove('shrink');
  }
});

// Desplazamiento automático después de unos segundos
setTimeout(() => {
  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
}, 3000);

Backend con Node.js (server.js)

Este archivo maneja el procesamiento del registro de usuarios y el envío de correos de confirmación utilizando Nodemailer.

    Configuración del Servidor:
    
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


Formulario de Registro (registro.html)

Este archivo HTML contiene el formulario de registro de usuario y la lógica para enviar los datos al servidor.

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Registro</title>
  <link rel="stylesheet" href="../cocina18/CSS/styles.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">  

  <!-- Bootstrap JavaScript -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  
  <!-- Enlace a tu JavaScript personalizado -->
  <script src="../cocina18/Js/main.js"></script>
</head>
<body>
  <div class="container mt-5">
    <h2>Registro de Usuario</h2>
    <p>Por favor, asegúrate de que tu nombre de usuario y contraseña cumplen con los siguientes requisitos:</p>
    <ul>
      <li>El nombre de usuario debe tener entre 5 y 20 caracteres y solo puede contener letras, números y guiones bajos.</li>
      <li>La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial.</li>
    </ul>
    <form id="registroForm" class="needs-validation" novalidate>
      <div class="form-group">
        <label for="username">Usuario:</label>
        <input type="text" class="form-control" name="username" id="username" required>
        <div class="invalid-feedback">
          Por favor, ingresa un nombre de usuario.
        </div>
      </div>
      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input type="email" class="form-control" name="email" id="email" required>
        <div class="invalid-feedback">
          Por favor, ingresa un correo electrónico válido.
        </div>
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" class="form-control" name="password" id="password" required minlength="8">
        <div class="invalid-feedback">
          La contraseña debe tener al menos 8 caracteres.
        </div>
      </div>
      <div class="form-group">
        <label for="confirm_password">Confirmar Contraseña:</label>
        <input type="password" class="form-control" name="confirm_password" id="confirm_password" required minlength="8">
        <div class="invalid-feedback">
          Por favor, confirma tu contraseña.
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Registrar</button>
      <br><br>
      <a href="index.html">Volver</a>
    </form>
  </div>

  <script>
    document.getElementById('registroForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());

      fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.text())
      .then(result => {
        alert(result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
  </script>
</body>
</html>



