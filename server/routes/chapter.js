'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/:chapterid', (req, res) => {
    const directoryPath = path.join(__dirname, '../book/' + req.params.chapterid);
    fs.readFile(directoryPath, 'utf-8', (err, data) => {
        if (err) {
            res.status(500).send("Load chapter fail.");
        }
        else {
            res.send(JSON.parse(data));
        }
    });
});

module.exports = router;