'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const loadTitle = filename => {
        const directoryPath = path.join(__dirname, '../book/' + filename);
        const chapter =  fs.readFileSync(directoryPath, 'utf-8');
        return JSON.parse(chapter).title;
    };

    if (Array.isArray(req.body.id)) {
        const titles = req.body.id.map(filename => loadTitle(filename));
        res.send(titles);
    }
    else {
        const title = loadTitle(req.body.id);
        res.send([title]);
    }
});

module.exports = router;