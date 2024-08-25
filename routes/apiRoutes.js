const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const uuid = require('');
 
// --> ALL of these routes are prefixed with '/api'
router.get('/notes', (req, res) => {
  readFromFile('./db.json').then((data) => res.json(JSON.parse(data)));
});

//post route needs logic
router.post('/notes', (req, res) => {
  console.log("Req Obj: ", req);
  console.log("Incoming Data: ", req.body);
  // using a temp variable we can ADD/MODTIFY the Data as needed
  const { title, text } = req.body;
  if (title && text) {
  let newNote = {
    id: uuid(),
    title,
    text,
  };
  readAndAppend(newNote, './db.json');
  res.json(`Note added successfully`);
} else {
  res.error('Error in adding note');
}
});

router.delete('/notes/:id', (req, res) => {
  console.log("Req Params: ", req.params);
});

module.exports = router;