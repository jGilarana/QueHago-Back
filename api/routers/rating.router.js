const {getAllRatings, getOneRating, createRating, updateRating, deleteRating} = require('../controllers/rating.controller')
const router = require('express').Router()
const { checkAuth } = require('../middleware')

router.get('/', getAllRatings)
router.get('/:id', getOneRating)
router.post('/', checkAuth, createRating)
router.put('/:id', checkAuth, updateRating)
router.delete('/:id', checkAuth, deleteRating)

module.exports = router