const { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller')
const router = require('express').Router()
const { checkAuth, checkClub } = require('../middleware')


router.get('/', checkClub,  getAllUsers)
router.get('/:id', checkAuth, getOneUser)
router.post('/', checkAuth, createUser)
router.put('/:id', checkAuth, updateUser)
router.delete('/:id', checkAuth, deleteUser)

module.exports = router



