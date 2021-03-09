const express = require('express');
const router = express.Router();
const { asyncHandler, csrfProtection } = require('./utils');
const db = require('../db/models');
const { signUpValidators, loginValidators } = require('./validators');
const { validationResult} = require('express-validator');
const bcrypt = require('bcryptjs')
const { loginUser, logoutUser } = require('../auth')

/* GET home page. */
router.get('/', asyncHandler(async(req, res) => {
  const shows = await db.Show.findAll({
    include: {model: db.Rating,
    order: ['rating', 'DESC'],
    limit: 10}
  });

  const loggedUser = req.session.auth.userId;
  const user = await db.User.findByPk(loggedUser)
  console.log(loggedUser)
  if (loggedUser){
    const shelf = await db.ShowShelf.findByPk(loggedUser);

  }


  // console.log(shows);

  res.render('index', { title: 'ShowMe', shows , user});
}));

module.exports = router;
