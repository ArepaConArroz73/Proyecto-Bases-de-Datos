const express = require("express");
const sql = require("sql");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("."));


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