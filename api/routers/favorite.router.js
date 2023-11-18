const {getAllFavorites, getOneFavorite, createFavorite, updateFavorite, deleteFavorite} = require('../controllers/favorite.controller')
const router = require('express').Router()

router.get('/', getAllFavorites)
router.get('/:id', getOneFavorite)
router.post('/', createFavorite)
router.put('/:id', updateFavorite)
router.delete('/:id', deleteFavorite)

module.exports= router