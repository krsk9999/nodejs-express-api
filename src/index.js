import express from 'express';
import cors from "cors"
// const apicache = require("apicache");
const app = express();
import 'dotenv/config'
const PORT = process.env.PORT || 3000
// const cache = apicache.middleware;
import routes from "./routes/index.js"

// const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

app.use(express.json());
app.use(cors())
// app.use(cache("2 minutes"));
app.use("/", routes)

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
    // V1SwaggerDocs(app, PORT);
});