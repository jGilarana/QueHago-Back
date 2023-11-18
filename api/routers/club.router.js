const {getAllClubs, getOneClub, createClub, updateClub, deleteClub} = require('../controllers/club.controller')
const router = require('express').Router()

router.get('/', getAllClubs)
router.get('/:id', getOneClub)
router.post('/', createClub)
router.put('/:id', updateClub)
router.delete('/:id', deleteClub)

module.exports = router