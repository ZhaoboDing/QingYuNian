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
            files.sort((a, b) => Number(a.match(/(\d+)/g)[0]) - Number((b.match(/(\d+)/g)[0])));
            res.send(files);
        }
    })
});

module.exports = router;