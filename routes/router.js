const { Router } = require('express');
const router = Router();
const formidable = require('formidable');
const path = require('path');

// Get index.html page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'), (err) => {
        if (err) return console.error(err);
    })
});

// Post Upload file
router.post('/', (req, res, next) => {
    const form = formidable({multiples: true});

    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }
        res.json(fields, files)
    })
})

// Get Upload file progress page
router.get('/uploading', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/uploading.html'), (err) => {
        if (err) return console.error(err);
    })
});

// Get Upload file overview
router.get('/success', (req, res) => {

});

module.exports = router;