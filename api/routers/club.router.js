const {getAllClubs, getOneClub, createClub, updateClub, deleteClub} = require('../controllers/club.controller')
const { checkAuth, checkAdmin } = require('../middleware')
const router = require('express').Router()

router.get('/', checkAuth, getAllClubs)
router.get('/:id', checkAuth, getOneClub)
router.post('/', checkAuth, checkAdmin, createClub)
router.put('/:id', checkAuth, checkAdmin, updateClub)
router.delete('/:id', deleteClub)

module.exports = router