const {check} = require('express-validator')
const  db  = require('../db/models')

const signUpValidators = [
  check('fullName')
    .exists({checkFalsy: true})
    .withMessage('Please provide your full name.')
    .isLength({max: 50})
    .withMessage('Full name must not be more than 50 characters.'),
  check('email')
    .exists({checkFalsy: true})
    .withMessage('Please provide a value for e-mail.')
    .isEmail()
    .withMessage('Please provide a valid e-mail.')
    .isLength({max: 50})
    .withMessage('e-Mail must not be more than 50 characters.')
    .custom(value => {
      return db.User.findOne({where: {email: value}})
      .then(user => {if(user){return Promise.reject('Email address is already in use by another account.')}})
    }),
  check('password')
    .exists({checkFalsy: true})
    .withMessage('Please provide a value for password.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least one lowercase letter, uppercase letter, number, and a special character.')
]

const loginValidators = [
  check('email')
    .exists({checkFalsy: true})
    .withMessage('Please provide a value for email address.'),
  check('password')
    .exists({checkFalsy: true})
    .withMessage('Please provide a value for password.')
]

const reviewValidators = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a valid title.')
    .isLength({ max: 50 })
    .withMessage('Review title can not be longer than 50 characters.'),
  check('comment')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a review.')
]


module.exports = {
  signUpValidators,
  loginValidators,
  reviewValidators
}
