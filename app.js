const express = require('express');
const path = require('path');
const fs = require('fs');
const { PORT } = require('./config/config.js');
const router = require('./routes/router');
const expressUpload = require('express-fileupload');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(expressUpload())
app.use(router);

app.listen(PORT, (err) => {
    if (err) return console.error(err);
    console.log(`Server listen on http://localhost:${PORT}`)
})