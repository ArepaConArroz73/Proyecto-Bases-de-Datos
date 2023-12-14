const express = require("express");
const sql = require("sql");
const mysql = require('mysql');
const fs = require('fs');

const app = express();

// Conexión a la base de datos
function connectToDatabase() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyecto',
  });
}

const connection = connectToDatabase();

connection.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }

  // Importar el archivo .sql
  const sql = fs.readFileSync('src/proyecto.sql', 'utf8');

  // Ejecutar el query
  connection.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('La base de datos se importó correctamente.');
  });

  // Cerrar la conexión
  connection.end((err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('La conexión se cerró correctamente.');
  });
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("."));

// Rutas
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});

app.get("/agregar-cliente.html", (req, res) => {
  res.sendFile(__dirname + "/html/agregar-cliente.html");
});

app.get("/editar-cliente.html", (req, res) => {
  res.sendFile(__dirname + "/html/editar-cliente.html");
});

app.get("/eliminar-cliente.html", (req, res) => {
  res.sendFile(__dirname + "/html/eliminar-cliente.html");
});

app.get("/consulta-clientes.html", (req, res) => {
  res.sendFile(__dirname + "/html/consulta-clientes.html");
});

app.get("/consulta-visita.html", (req, res) => {
  res.sendFile(__dirname + "/html/consulta-visita.html");
});

app.get("/agregar-visita.html", (req, res) => {
  res.sendFile(__dirname + "/html/agregar-visita.htm");
});