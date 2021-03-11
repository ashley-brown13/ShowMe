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
  res.render('showShelves', {showShelves, loggedUser})
}))

router.get('/showshelves/:id(\\d+)', asyncHandler(async(req, res) => {
  const showShelf =  await db.ShowShelf.findByPk(req.params.id, {
    include: { model: db.Show }
  });

  let shows = showShelf.Shows
  console.log(showShelf)
  res.render('showShelf', {shows})
}))

router.post('/showShelves', asyncHandler (async (req, res, next) => {
  const { title } = req.body;
  const userId = req.session.auth.userId
  db.ShowShelf.create({
    title,
    userId
  })
  res.redirect("/showShelves")
}))

router.post('/showShelves/:id(\\d+)', asyncHandler (async(req, res, next) => {
  const id = req.params.id;
  const shelf = await db.ShowShelf.findByPk(id);

  await shelf.destroy();
  // console.log(req.body)
  // const userId = req.session.auth.userId
  // await db.ShowShelf.destroy({
  //     where: { title, userId }
  // })
  res.redirect("/showShelves")
}))

module.exports = router
