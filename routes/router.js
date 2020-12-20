const { Router } = require('express');
const router = Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'), (err) => {
        if (err) return console.error(err);
    })
});

router.get('/uploading', (req, res) => {
    
});

router.get('/success', (req, res) => {

});

module.exports = router;