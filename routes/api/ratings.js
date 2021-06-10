const express = require('express');
const {asyncHandler} = require('../utils')
const router = express.Router()
const db = require('../../db/models')
const {ratings} = require('../utils')

router.post('/api/shows/:id/ratings', asyncHandler(async(req, res) => {
  const {userId} = req.session.auth
  const userRating = await db.Rating.findOne({where: {showId: req.params.id, userId }})
  const {ratingValue} = req.body
  if(userRating){
    await userRating.update({rating: ratingValue[ratingValue.length-1]});
    return res.json({updated: 'updated'})
  }else {
    await db.Rating.create({rating: ratingValue[ratingValue.length-1], userId, showId: req.params.id});
    res.json({created: 'created'})
  }
}));

router.get('/api/shows/:id(\\d+)/ratings', asyncHandler(async(req, res) => {
  const avgRating = await ratings(req.params.id)
  res.json({avgRating})
}));

module.exports = router
