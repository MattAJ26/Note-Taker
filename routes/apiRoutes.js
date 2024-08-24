const router = require('express').Router();
const path = require('path');
const fs = require('fs');

// --> ALL of these routes are prefixed with '/api'
router.get('/notes', (req, res) => {
  readFromFile('./db.json').then((data) => res.json(JSON.parse(data)));
});

//post route needs logic
router.post('/notes', (req, res) => {
  console.log("Req Obj: ", req)
  console.log("Incoming Data: ", req.body); // { title: "", content: ""}
  // using a temp variable we can ADD/MODTIFY the Data as needed
  let newNote = {
    id: "5",
    title: req.body.title,
    text: req.body.text
  }
});

router.delete('/notes/:id', (req, res) => {
   console.log("Req Params: ", req.params);  // { id: 6 }
});

module.exports = router;