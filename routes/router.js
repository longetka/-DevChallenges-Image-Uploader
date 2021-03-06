const { Router } = require('express');
const router = Router();
const fs = require('fs');
const path = require('path');

// Get index.html page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'), (err) => {
        if (err) return console.error(err);
    })
});

// Post Upload file
router.post('/upload', async (req, res) => {
    const images = req.files;
    const uploadPath = path.join(__dirname, '../uploads/' + images.file.name);
    images.file.mv(uploadPath, (err) => {
        if (err) return console.error(err);
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