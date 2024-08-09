const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');

router.get('/', (req, res) => {
  readFromFile('./db.json').then((data) => res.json(JSON.parse(data)));
});

router.post('/', (req, res) => {
  console.log(req.body);

  const newNote = { ...req.body, id: uuid() };
    readAndAppend(newNote, './db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding note');
  }
});

router.delete();

module.exports = router;