const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');

router.get('/', (req, res) => {
  readFromFile('./db.json').then((data) => res.json(JSON.parse(data)));
});

//post route needs logic
router.post('/', (req, res) => {
  console.log(req.body);

  const newNote = { ...req.body, id: uuid() };
});

router.delete();

module.exports = router;