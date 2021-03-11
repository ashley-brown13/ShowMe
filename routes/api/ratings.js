const express = require('express');
const {asyncHandler} = require('../utils')
const router = express.Router()
const db = require('../../db/models')
const {ratings} = require('../utils')

router.post('/api/shows/:id/ratings', asyncHandler(async(req, res) => {
  const {userId} = req.session.auth
  const {ratingValue} = req.body
  const rating = await db.Rating.create({rating: ratingValue, userId, showId: req.params.id})
  res.json({rating})
}));

router.get('/api/shows/:id(\\d+)/ratings', asyncHandler(async(req, res) => {
  const avgRating = await ratings(req.params.id)
  res.json({avgRating})
}));

module.exports = router
