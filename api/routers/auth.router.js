const router = require('express').Router()
const {signup, login, signupClub, loginClub} = require('../controllers/auth.controller')
const { checkEmail, checkPassword } = require('../middleware')

router.post('/signup', checkEmail, checkPassword, signup)
router.post('/login', login) 
router.post('/signup/club', checkEmail, checkPassword, signupClub) 
router.post('/login/club', loginClub) 

module.exports = router