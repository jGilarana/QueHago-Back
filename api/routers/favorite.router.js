const {getAllFavorites, getOneFavorite, createFavorite, updateFavorite, deleteFavorite} = require('../controllers/favorite.controller')
const { checkAuth } = require('../middleware')
const router = require('express').Router()

router.get('/', checkAuth, getAllFavorites)
router.get('/:id',checkAuth,  getOneFavorite)
router.post('/',checkAuth,  createFavorite)
router.put('/:id', checkAuth, updateFavorite)
router.delete('/:id', checkAuth, deleteFavorite)

module.exports= router