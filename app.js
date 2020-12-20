const express = require('express');
const path = require('path');
const formidable = require('formidable');
const fs = require('fs');
const { PORT } = require('./config/config.js');
const index = require('./routes/router');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(index);

app.listen(PORT, (err) => {
    if (err) return console.error(err);
    console.log(`Server listen on http://localhost:${PORT}`)
})