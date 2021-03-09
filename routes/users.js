const express = require('express');
const router = express.Router();
const { asyncHandler, csrfProtection } = require('./utils');
const db = require('../db/models');
const { signUpValidators, loginValidators } = require('./validators');
const { validationResult} = require('express-validator');
const bcrypt = require('bcryptjs')
const { loginUser, logoutUser } = require('../auth')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users/signup', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render("user-signup", { title: "Sign up for ShowMe", user, csrfToken: req.csrfToken()});

});

router.post('/users/signup', csrfProtection, signUpValidators, asyncHandler(async(req, res, next) => {
  const {fullName, email, password} = req.body;
  const user = db.User.build({fullName, email});
  const validatorErrors = validationResult(req);
  if(validatorErrors.isEmpty()){
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
    loginUser(req, res, user);
    return req.session.save((error) => {
      if(error){
        next(error)
      }
      return res.redirect('/')
    })
  }else {
    const errors = validatorErrors.array().map(error => error.msg);
    res.render('user-signup', {
      title: 'Sign up for ShowMe',
      user,
      errors,
      csrfToken: req.csrfToken(),
    })
  };
}))

router.get('/users/login', csrfProtection, (req, res) => {
  res.render('user-login', {title: "Sign In Page", csrfToken: req.csrfToken(),})
});

router.post('/users/login', csrfProtection, loginValidators, asyncHandler(async(req, res, next) => {
  const { email, password } = req.body;
  let errors = [];
  const validatorErrors = validationResult(req);
  if(validatorErrors.isEmpty()){
    const user = await db.User.findOne({where: {email}});
    if(user !== null){
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());
      if(passwordMatch){
        loginUser(req, res, user)
        return req.session.save((error) => {
          if(error){
            next(error)
          }
          return res.redirect('/')
        })
      }
    }
    errors.push('Login failed for the provided email and password.');
  }else {
    errors = validatorErrors.array().map(error => error.msg);
  }
  res.render('user-login', {
    title: "Sign In Page",
    email,
    errors,
    csrfToken: req.csrfToken()
  })
}))

router.post('/user/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/');
});



module.exports = router;
