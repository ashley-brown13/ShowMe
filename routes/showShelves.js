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
  let shelves
  if (req.session.auth){
    const loggedUser = req.session.auth.userId;
    user = await db.User.findByPk(loggedUser)
    shelves = await db.ShowShelf.findAll({
      where: { userId: loggedUser }
  })}
  res.render('showShelf', {shows, showShelf, shelves})
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
  res.redirect("/showShelves")
}))

router.post('/showShelves/:id(\\d+)/shows/:showid(\\d+)', asyncHandler (async(req, res, next) => {
  const showId = req.params.showid;
  const showShelfId = req.params.id;
  const join = await db.ShowShelvesShow.findOne({where: {showId, showShelfId}})
  await join.destroy();
  res.redirect(`/showshelves/${showShelfId}`)
}))


module.exports = router
