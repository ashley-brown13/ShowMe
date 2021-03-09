const express = require('express');
const {asyncHandler, csrfProtection} = require('./utils')
const db = require('../db/models')
const router = express.Router();

router.get('/shows/:id(\\d+)', asyncHandler(async(req, res) => {
  const show = await db.Show.findByPk(req.params.id)
  const reviews = await db.Review.findAll({where: {showId: req.params.id}});
  res.render('show', {title: show.title, show, reviews})
}))
