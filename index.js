require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
  res.json({ mensaje: "¡Bienvenido al servidor RPG!" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
