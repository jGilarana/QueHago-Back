const { getAllUsers, getOneUser, createUser, updateUser, deleteUser, setFavorite, getUsersFavorite, setRating, getUsersRating, getProfile} = require('../controllers/user.controller')
const router = require('express').Router()
const { checkAuth, checkClub } = require('../middleware')


router.get('/', checkAuth, getAllUsers)
router.get('/profile', checkAuth, getProfile)
router.get('/getfav',checkAuth, getUsersFavorite)
router.post('/addfav',checkAuth, setFavorite)
router.post('/addrating',checkAuth, setRating)
router.get('/seerating', checkAuth, getUsersRating)
router.get('/:id', checkAuth, getOneUser)
router.post('/', checkAuth, createUser)
router.put('/:id', checkAuth, updateUser)
router.delete('/:id', checkAuth, deleteUser)

module.exports = router