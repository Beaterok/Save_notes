const router = require('express').Router();
const notes = require('./notes');
// GET Route 

router.use('/notes',notes)


module.exports = router;