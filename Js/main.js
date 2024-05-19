document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById('loginForm');
  const registroForm = document.getElementById('registroForm');
  const header = document.querySelector('.encabezado');
  const navContainer = document.querySelector('.nav-container');

  if (registroForm) {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm_password');

    registroForm.addEventListener('submit', function(event) {
      event.preventDefault();
      event.stopPropagation();

      // Reset validation messages
      registroForm.classList.remove('was-validated');
      username.setCustomValidity('');
      password.setCustomValidity('');
      confirmPassword.setCustomValidity('');

      let valid = true;

      // Validate username
      if (!/^[a-zA-Z0-9_]{5,20}$/.test(username.value)) {
        username.setCustomValidity('El nombre de usuario debe tener entre 5 y 20 caracteres y solo puede contener letras, números y guiones bajos.');
        valid = false;
      }

      // Validate password
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password.value)) {
        password.setCustomValidity('La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial.');
        valid = false;
      }

      // Validate confirm password
      if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity('Las contraseñas no coinciden.');
        valid = false;
      }

      if (valid) {
        // Store the user in localStorage
        const user = {
          username: username.value,
          password: password.value, // In a real application, never store plain passwords
          registrationDate: new Date().toISOString()
        };

        localStorage.setItem(user.username, JSON.stringify(user));

        // Display a success message
        alert('Usuario registrado exitosamente. Recuerde cambiar su contraseña cada 90 días.');

        // Reset the form
        registroForm.reset();
      } else {
        registroForm.classList.add('was-validated');
      }
    });
  }

  if (loginForm) {
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      event.stopPropagation();

      // Reset validation messages
      loginForm.classList.remove('was-validated');
      username.setCustomValidity('');
      password.setCustomValidity('');

      let valid = true;

      // Validate username
      if (username.value.trim() === '') {
        username.setCustomValidity('Por favor, ingresa tu usuario.');
        valid = false;
      }

      // Validate password
      if (password.value.trim() === '') {
        password.setCustomValidity('Por favor, ingresa tu contraseña.');
        valid = false;
      }

      if (valid) {
        // Check the user in localStorage
        const user = JSON.parse(localStorage.getItem(username.value));

        if (user && user.password === password.value) {
          alert('Inicio de sesión exitoso.');
          // Redirect to the main page or another page
          window.location.href = 'index.html';
        } else {
          alert('Nombre de usuario o contraseña incorrectos.');
        }
      } else {
        loginForm.classList.add('was-validated');
      }
    });
  }

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('shrink');
      navContainer.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
      navContainer.classList.remove('shrink');
    }
  });

  // Controles de slider general
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const slider = document.querySelector('.slider');

  if (prev && next && slider) {
    prev.addEventListener('click', () => {
      slider.scrollLeft -= 315;
    });

    next.addEventListener('click', () => {
      slider.scrollLeft += 315;
    });
  }

  // Controles Postres
  const prev2 = document.querySelector('.prev2');
  const next2 = document.querySelector('.next2');
  const slider2 = document.querySelector('.slider2');

  if (prev2 && next2 && slider2) {
    prev2.addEventListener('click', () => {
      slider2.scrollLeft -= 300;
    });

    next2.addEventListener('click', () => {
      slider2.scrollLeft += 300;
    });
  }

  // Controles Panadería
  const prev3 = document.querySelector('.prev3');
  const next3 = document.querySelector('.next3');
  const slider3 = document.querySelector('.slider3');

  if (prev3 && next3 && slider3) {
    prev3.addEventListener('click', () => {
      slider3.scrollLeft -= 300;
    });

    next3.addEventListener('click', () => {
      slider3.scrollLeft += 300;
    });
  }

  // Reduce header automatically after 5 seconds
  setTimeout(() => {
    header.classList.add('shrink');
    navContainer.classList.add('shrink');
  }, 5000); // 5 seconds
});

