const express = require('express');
// const apicache = require("apicache");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000
// const cache = apicache.middleware;

const v1PacientesRouter = require('./v1/routes/pacientesRoutes');
// const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

app.use(express.json());
// app.use(cache("2 minutes"));
app.get('/', (req, res) => {
    // res.redirect('/api/v1');
});
app.use('/api/v1/paciente', v1PacientesRouter);








app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
    // V1SwaggerDocs(app, PORT);
});