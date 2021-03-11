const express = require('express');
const { validationResult } = require('express-validator');
const { asyncHandler, csrfProtection } = require('./utils');
const db = require('../db/models');
const {  reviewValidators } = require('./validators');
const router = express.Router();
const { Op } = require("sequelize");

let shelves;

router.post('/search', asyncHandler (async (req, res) => {
    const { searchInput } = req.body
    if(req.session.auth){
        const loggedUser = req.session.auth.userId;
        shelves = await db.ShowShelf.findAll({
            where: { userId: loggedUser }
        })
    }

    const shows = await db.Show.findAll({ 
        where: {
            title: {[Op.iLike]: `%${searchInput}%`}
        },
    })
    res.render('search', { shows, shelves })
}))

module.exports = router