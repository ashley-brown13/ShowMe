const express = require('express');
const { validationResult } = require('express-validator');
const { asyncHandler, csrfProtection } = require('./utils');
const db = require('../db/models');
const {  reviewValidators } = require('./validators');
const router = express.Router();

router.get('/shows/:id(\\d+)', asyncHandler(async(req, res) => {
  const show = await db.Show.findByPk(req.params.id)
  const reviews = await db.Review.findAll({
    where: {showId: req.params.id},
    include: { model: db.User, attributes: db.User.fullName }
    });
    console.log(reviews)
  res.render('show', {title: show.title, show, reviews})
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


module.exports = router
