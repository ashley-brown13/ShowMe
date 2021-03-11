const csrf = require('csurf');
const csrfProtection = csrf({cookie: true});
const db = require('../db/models')


const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

const ratings = async(showId) => {
  const ratings = await db.Rating.findAll({where: {showId}});
  let totalRating = 0
  ratings.forEach(rating => totalRating += rating.rating )
  const avgRating = Number.parseFloat(totalRating/ratings.length).toFixed(2)
  return avgRating
}

module.exports = {
    csrfProtection,
    asyncHandler,
    ratings
};
