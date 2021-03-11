const express = require('express');
const { validationResult } = require('express-validator');
const { asyncHandler, csrfProtection } = require('./utils');
const db = require('../db/models');
const {  reviewValidators } = require('./validators');
const router = express.Router();
const { Op } = require("sequelize");

router.post('/search', asyncHandler (async (req, res) => {
    const { searchInput } = req.body
    const loggedUser = req.session.auth.userId;
    let shelves = await db.ShowShelf.findAll({
        where: { userId: loggedUser }
    })

    const shows = await db.Show.findAll({ 
        where: {
            title: {[Op.iLike]: `%${searchInput}%`}
        },
    })
    res.render('search', { shows, shelves })
}))

module.exports = router