const express = require('express');
const {asyncHandler} = require('../utils');
const db = require('../../db/models');
const router = express.Router();


router.post('/api/showshelves/:id(\\d+)', asyncHandler (async (req, res, next) => {
    const {showShelfId, userId, showId} = req.body;
    db.ShowShelvesShow.create({
        showShelfId,
        showId
    })
}))

module.exports = router;