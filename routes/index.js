const express = require('express');
const router = express.Router();
const { asyncHandler, csrfProtection } = require('./utils');
const db = require('../db/models');
const { signUpValidators, loginValidators } = require('./validators');
const { validationResult} = require('express-validator');
const bcrypt = require('bcryptjs')
const { loginUser, logoutUser } = require('../auth')
const { Sequelize } = require('sequelize');

/* GET home page. */
router.get('/', asyncHandler(async(req, res) => {
  const shows = await db.Show.findAll({
    order: [[ Sequelize.fn('RANDOM')]],
    limit: 12
  });

  //Encounter.findAll({ order: Sequelize.literal('rand()'), limit: 5 }).then((encounters)

let user = null;
let shelves;
if (req.session.auth){
  const loggedUser = req.session.auth.userId;
  user = await db.User.findByPk(loggedUser)
  shelves = await db.ShowShelf.findAll({
    where: { userId: loggedUser }
})}
  res.render('index', { title: 'ShowMe', shows , user, shelves});
}))




module.exports = router;
