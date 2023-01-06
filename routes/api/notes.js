const router = require('express').Router();
const uuid = require('../../helpers/uuid');
const { readFromFile,  readAndAppend } = require('../../helpers/fsUtils');
const {notes} = require('../../db/db.json');
// GET Route 
router.get('/',(req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for submitting feedback
router.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to notes`);

    // Destructuring assignment for the items in req.body
    const { title,text } = req.body;
  
    // If all the required properties are present
    if (req.body) {
      // Variable for the object we will save
      const newNote = {
        title,
        text,
        feedback_id: uuid(),
      };
  
      readAndAppend(newNote, './db/db.json');
    
      res.json('Added');
    } else {
      res.json('Error in posting NOTE');
    }
  });

module.exports = router;