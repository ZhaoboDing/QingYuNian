'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const directoryPath = path.join(__dirname, '../book');
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            res.status(500).send('Load chapters error.');
        }
        else {
            res.send(files);
        }
    })
});

module.exports = router;