const {getAllClubs, getOneClub, createClub, updateClub, deleteClub} = require('../controllers/club.controller')
const { checkAuth, checkAdmin, checkClub } = require('../middleware')
const router = require('express').Router()

router.get('/', checkAuth, getAllClubs)
router.get('/:id', checkAuth, getOneClub)
router.post('/', checkAuth, createClub)
router.put('/:id', checkAuth, checkAdmin, updateClub)
router.delete('/:id', checkAuth, checkAdmin, deleteClub)

module.exports = router