const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/routes");
const cors = require('cors');

app.use(cors())

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Dialog API',
            description: 'Dialog API Information',
            contact: {
                name: 'Hecquet Quentin',
            },
            servers: ['https://apiblaguecarambar.onrender.com'],
        },
    },
    apis: ['./routes/v1/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/", (req, res) => {
res.status(200).json({"body":"Bienvenue son Blague Carambar"});
})

app.use("/api/v1", routes)

app.listen(3000, console.log(`Le serveur est lancé sur le port ${port}`))