const express = require('express');
const {asyncHandler, csrfProtection} = require('./utils')
const db = require('../db/models')
const router = express.Router();

router.get('/titles', asyncHandler(async(req, res) => {
  const shows = await db.Show.findAll()
  res.render('alltitles', {shows})
}));
router.get('/shows/:id(\\d+)', asyncHandler(async(req, res) => {
  const show = await db.Show.findByPk(req.params.id)
  console.log(show.youtubeVideoURL)
  const reviews = await db.Review.findAll({
    where: {showId: req.params.id},
    include: { model: db.User, attributes: db.User.fullName }
    });
    console.log(reviews)
  res.render('show', {title: show.title, show, reviews})
}))

router.get('/reviews/:id(\\d+)', asyncHandler(async (req, res) => {
  const review = await db.Review.findByPk(req.params.id, {
    include: db.Show
  });
  res.render('reviews', { review })
}))

router.delete('/reviews/delete/:id(\\d+)', asyncHandler(async (req, res) => {
  const review = await db.Review.findByPk(req.params.id);
  console.log(review)
  const showId = await parseInt(review.showId, 10)
  await review.destroy();
  res.redirect(`/shows/${showId}`)
}));

module.exports = router
