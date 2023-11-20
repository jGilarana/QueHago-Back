const {getAllClubs, getOneClub, createClub, updateClub, deleteClub, createClubsEvent, updateClubsEvent} = require('../controllers/club.controller')
const { checkAuth, checkAdmin, checkClub } = require('../middleware')
const router = require('express').Router()

router.get('/', checkAuth, getAllClubs)
router.get('/:id', checkAuth, getOneClub)
router.post('/create/', checkAuth, checkClub, createClubsEvent)
router.post('/', checkAuth, checkClub, createClub)
router.put('/update/:id', checkAuth, updateClubsEvent)
router.put('/:id', checkAuth, checkClub, updateClub)
router.delete('/:id', deleteClub)

module.exports = router