const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario', // Cambia esto a tu usuario de MySQL
  password: 'tu_contraseña', // Cambia esto a tu contraseña de MySQL
  database: 'recetas_db'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

app.get('/', (req, res) => {
  res.send('API Running');
});

// Ruta para agregar un usuario
app.post('/usuarios', (req, res) => {
  const { nombre, correo, contraseña } = req.body;
  let sql = 'INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?, ?, ?)';
  db.query(sql, [nombre, correo, contraseña], (err, result) => {
    if (err) throw err;
    res.send('Usuario añadido...');
  });
});

// Ruta para modificar un usuario
app.put('/usuarios/:id', (req, res) => {
  const { nombre, correo, contraseña } = req.body;
  let sql = 'UPDATE usuarios SET nombre = ?, correo = ?, contraseña = ? WHERE id = ?';
  db.query(sql, [nombre, correo, contraseña, req.params.id], (err, result) => {
    if (err) throw err;
    res.send('Usuario actualizado...');
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
