const router = require('express').Router()
const {signup, login, signupClub, loginClub} = require('../controllers/auth.controller')
const { checkEmail } = require('../middleware')

router.post('/signup', checkEmail, signup)
router.post('/login', login) 
router.post('/signup/club', signupClub) 
router.post('/login/club', loginClub) 

module.exports = router