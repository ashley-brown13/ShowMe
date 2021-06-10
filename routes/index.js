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
  let shows = await db.Show.findAll({
    order: [[ Sequelize.fn('RANDOM')]],
    limit: 12
  });

  //Encounter.findAll({ order: Sequelize.literal('rand()'), limit: 5 }).then((encounters)
  let user = null;
  let shelves;
  let ratings = {}
  if(req.session.auth){
    const loggedUser = req.session.auth.userId;
    user = await db.User.findByPk(loggedUser)
    shelves = await db.ShowShelf.findAll({
      where: { userId: loggedUser }
    });
    for(let i = 0; i< shows.length; i ++){
      let show = shows[i];
      let rating = await db.Rating.findOne({where: {userId: user.id, showId: show.id}}).rating;
      ratings[show.id] = rating ? rating : 0
    };
  }
  res.render('index', { title: 'ShowMe', shows , user, shelves, ratings});
}));




module.exports = router;
