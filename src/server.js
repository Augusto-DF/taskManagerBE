const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 3030;

const app = express();

app.use(cors());
app.use(bodyParser().json());
app.use("/Pages", express.static(__dirname + "/Pages"));

const database = require("./Database");

app.get("/", (req, res) => res.sendFile(__dirname + "/Pages/Index/index.html"));
app.get("/privado", (req, res) => res.send("Só pra usuários logados"));

app.listen(PORT, () => {
  console.log("Servidor Ligado");
});
