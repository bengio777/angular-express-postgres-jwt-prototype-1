var express = require('express');
var router = express.Router();
const userQueries = require('../database/user-queries')
const bcrypt = require('bcrypt')

router.post('/create', (req, res, next) => {
  bcrypt.genSalt(12, (err, salt) => {
    if(err) return next(err)
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if(err) return next(err)

      const user = {
        username: req.body.username,
        password: hash
      }

      userQueries.create(user)
        .then((result) => {
          res.json(result)
        })
        .catch((err) => {
          console.error('There was a problem creating a user');
          next(err)
        })
    })
  })
})

module.exports = router;
