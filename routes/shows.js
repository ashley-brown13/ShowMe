const express = require('express');
const {asyncHandler, csrfProtection} = require('./utils')
const db = require('../db/models')
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

router.delete('/review/:id(\\d+)', asyncHandler(async (req, res) => {
  const review = await db.Review.findByPk(req.params.id);
  const showId = parseInt(review.showId, 10)
  res.redirect(`/shows/${showId}`)
}));

module.exports = router
