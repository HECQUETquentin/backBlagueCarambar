const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/routes");

const cors = require('cors');

app.use(cors());

app.get("/", (req, res) => {
res.status(200).json({"body":"Bienvenue son Blague Carambar"});
})

app.use("/api/v1", routes)

app.listen(3000, console.log(`Le serveur est lancé sur le port ${port}`));