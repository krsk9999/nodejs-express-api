const express = require('express');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 3000

const v1PacientesRouter = require('./v1/routes/pacientesRoutes');

app.use(express.json());
app.get('/', (req, res) => {
    res.redirect('/api/v1');
});
app.use('/api/v1', v1PacientesRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
});