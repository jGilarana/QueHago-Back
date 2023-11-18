const {getAllFavorites, getOneFavorite, createFavorite, updateFavorite, deleteFavorite} = require('../controllers/favorite.controller')
const { checkAuth } = require('../middleware')
const router = require('express').Router()

router.get('/', checkAuth, getAllFavorites)
router.get('/:id', getOneFavorite)
router.post('/', createFavorite)
router.put('/:id', updateFavorite)
router.delete('/:id', deleteFavorite)

module.exports= router