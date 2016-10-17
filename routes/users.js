var express = require('express');
var router = express.Router();

router.post('/create', (req, res, next) => {
  res.send('yo')
})

module.exports = router;
