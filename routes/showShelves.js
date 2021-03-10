const express = require('express');
const {asyncHandler, csrfProtection} = require('./utils')
const db = require('../db/models')
const router = express.Router();

router.get('/showshelves', asyncHandler(async(req, res) => {
  const loggedUser = req.session.auth.userId;
  const user = await db.User.findByPk(loggedUser)
  const showShelves = await db.ShowShelf.findAll({
    where: {userId: user.id},
  })
  res.render('showShelves', {showShelves})
}))

router.get('/showshelves/:id(\\d+)', asyncHandler(async(req, res) => {
  const showShelf =  await db.ShowShelf.findByPk(req.params.id, {
    include: { model: db.Show, include: {
      model: db.Review
    } }
  });
  let shows = showShelf.Shows
  console.log(shows[0].Reviews)
  res.render('showShelf', {shows})
}))

router.post('/showshelves', csrfProtection, asyncHandler(async(req, res) => {

}))

module.exports = router
