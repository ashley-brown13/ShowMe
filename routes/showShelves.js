const express = require('express');
const {asyncHandler, csrfProtection} = require('./utils')
const db = require('../db/models')
const router = express.Router();

router.get('/showshelves', asyncHandler(async(req, res) => {
  const loggedUser = req.session.auth.userId;
  const user = await db.User.findByPk(loggedUser)
  const showShelves = await db.ShowShelf.findAll({
    where: {userId: user.id},
    include : {model: db.ShowShelvesShow}
  })
  console.log(showShelves.showShelvesShow.showId)
  // res.render('showShelf', {title: show.title, show, reviews})
}))

module.exports = router
