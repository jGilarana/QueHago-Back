const { getAllUsers, getOneUser, createUser, updateUser, deleteUser, setFavorite, getUsersFavorite, setRating, getUsersRating, updateUsersRating} = require('../controllers/user.controller')
const router = require('express').Router()
const { checkAuth, checkClub } = require('../middleware')


router.get('/', checkClub,  getAllUsers)
router.get('/getfav',checkAuth, getUsersFavorite)
router.post('/addfav',checkAuth, setFavorite)
router.post('/addrating',checkAuth, setRating)
router.put('/update/:id', checkAuth, updateUsersRating) 
router.get('/seerating', getUsersRating)
router.get('/:id', checkAuth, getOneUser)
router.post('/', checkAuth, createUser)

router.put('/:id', checkAuth, updateUser)
router.delete('/:id', checkAuth, deleteUser)

module.exports = router