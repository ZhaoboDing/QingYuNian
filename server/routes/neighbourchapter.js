'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/:chapterid', (req, res) => {
    const directoryPath = path.join(__dirname, '../book');
    console.log(directoryPath);
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            res.status(500).send('Load chapters error.');
        }
        else {
            files.sort((a, b) => Number(a.match(/(\d+)/g)[0]) - Number((b.match(/(\d+)/g)[0])));
            const index = files.indexOf(req.params.chapterid);
            if (index === -1) {
                res.send([null, null]);
            }
            else {
                let prev = null;
                let succ = null;
                if (index > 0) {
                    prev = files[index - 1];
                }
                if (index < files.length - 1) {
                    succ = files[index + 1];
                }
                res.send([prev, succ]);
            }

        }
    });
});

module.exports = router;