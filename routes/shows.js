const express = require('express');
const { validationResult } = require('express-validator');
const { asyncHandler, csrfProtection, ratings } = require('./utils');
const db = require('../db/models');
const {  reviewValidators } = require('./validators');
const router = express.Router();


router.get('/shows/:id(\\d+)', asyncHandler(async(req, res) => {
  const show = await db.Show.findByPk(req.params.id)
  const avgRating = await ratings(req.params.id)
  const reviews = await db.Review.findAll({
    where: {showId: req.params.id},
    include: { model: db.User, attributes: db.User.fullName }
    });
    let user = null;
    let shelves;
    if (req.session.auth){
      const loggedUser = req.session.auth.userId;
      user = await db.User.findByPk(loggedUser)
      shelves = await db.ShowShelf.findAll({
      where: { userId: loggedUser }
    })}
  res.render('show', {title: show.title, show, reviews, user, shelves, avgRating})
}))

router.get('/shows/:id(\\d+)/reviews', csrfProtection, asyncHandler(async (req, res) => {
  const show = await db.Show.findByPk(req.params.id);
  const review = await db.Review.build();
  res.render('create-review', { show, review, csrfToken: req.csrfToken() })
}))

router.post('/shows/:id(\\d+)/reviews', csrfProtection, reviewValidators, asyncHandler(async (req, res) => {
  const { title, comment } = req.body
  const review = await db.Review.build({
    title,
    comment,
    showId: req.params.id,
    userId: res.locals.user.id
  })
  const validationErrors = validationResult(req)
  if (validationErrors.isEmpty()) {
    await review.save();
    return res.redirect(`/shows/${req.params.id}`)
  } else {
    const errors = validationErrors.array().map(error => error.msg);
    res.render('create-review', { show, review, csrfToken: req.csrfToken(), errors })
  }
}))

router.get('/reviews/:id(\\d+)', asyncHandler(async (req, res) => {
  const review = await db.Review.findByPk(req.params.id, {
    include: db.Show
  });
  res.render('reviews', { review })
}))

module.exports = router
