const express = require('express');
const router = express.Router();
const { asyncHandler, csrfProtection } = require('./utils');
const db = require('../db/models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user/register', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render("user-register", { title: "Sign up for ShowMe", user, csrfToken: req.csrfToken()});

})

module.exports = router;
