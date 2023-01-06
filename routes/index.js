const router = require('express').Router();
const path = require('path');
const api = require('./api');
router.use('./api',api)

// GET Route 
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET Route 
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);
module.exports = router;