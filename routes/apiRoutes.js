const router = require('express').Router();
const path = require('path');
const { readAndAppend, readFromFile, writeToFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');
 
// --> ALL of these routes are prefixed with '/api'
router.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//post route needs logic
router.post('/notes', (req, res) => {
  console.log("Req Obj: ", req);
  console.log("Incoming Data: ", req.body);
  // using a temp variable we can ADD/MODTIFY the Data as needed
  const { title, text } = req.body;
  if (title && text) {
  let newNote = {
    id: uuidv4(),
    title: title,
    text: text,
  };
  readAndAppend(newNote, './db/db.json');
  res.json(`Note added successfully`);
} else {
  res.json('Error in adding note');
}
});

router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Make a new array of all tips except the one with the ID provided in the URL
      const result = json.filter((note) => note.id !== noteId);
      // Save that array to the filesystem
      writeToFile('./db/db.json', result);
      // Respond to the DELETE request
      res.json(`Item ${noteId} has been deleted 🗑️`);
    });
});

module.exports = router;