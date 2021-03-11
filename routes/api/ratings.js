const express = require('express');
const {asyncHandler} = require('../utils')
const router = express.Router()
const db = require('../../db/models')

router.post('/api/shows/:id/ratings', asyncHandler(async(req, res) => {
  const {userId} = req.session.auth
  console.log('IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII\n', userId)
  const {ratingValue} = req.body
  await db.Rating.create({rating: ratingValue, userId, showId: req.params.id})
  res.json({success: success})
}))

module.exports = router
