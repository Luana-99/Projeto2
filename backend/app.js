const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require("mongoose");
const clienteRoutes = require("./rotas/clientes");
const pacienteRoutes = require("./rotas/pacientes");
const agendaRoutes = require("./rotas/agendas");

mongoose
  .connect(
    "mongodb+srv://Projeto_2021:projeto21@cluster0.un0lx.mongodb.net/Projeto_2021?retryWrites=true&w=majority" 
   /* "mongodb+srv://fefebfs1:fefebfs@cluster0.t72pr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"     */
  )
  
  .then(() => {
    console.log("Conexão OK");
  })
  .catch(function (e) {
    console.log(e);
  });

const get = async () => {
  return Promise.reject("Oops!").catch((err) => {
    throw new Error(err);
  });
};

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT,DELETE, OPTIONS"
  );
  next();
});
app.use("/api/clientes", clienteRoutes);
app.use("/api/pacientes", pacienteRoutes);
app.use("/api/agendas",agendaRoutes);
module.exports = app;
