const {getAllUsers, getOneUser, createUser, updateUser, deleteUser, setFavorite, getUsersFavorite, setRating, getUsersRating, getProfile} = require('../controllers/user.controller')
const { getImage, postImage, postUserImage } = require('../../Cloudinary/cloudycontrol')
const router = require('express').Router()
const { checkAuth, checkClub } = require('../middleware')
const multer = require('multer')
const upload = multer({dest: './Assets/uploads'})

router.put('/post-main-image',upload.single('file'), checkAuth, postUserImage)
router.post('/getimage',upload.single('file'), getImage)
router.post('/postimage',upload.single('file'), postImage)

router.get('/', checkAuth, getAllUsers)
router.get('/profile', checkAuth, getProfile)
router.get('/getfav',checkAuth, getUsersFavorite)
router.post('/addfav',checkAuth, setFavorite)
router.post('/addrating',checkAuth, setRating)
router.get('/seerating', checkAuth, getUsersRating)
router.get('/:id', checkAuth, getOneUser)
router.post('/', checkAuth, createUser)
router.put('/:id', checkAuth, updateUser)
router.delete('/:id', checkAuth, deleteUser)

module.exports = router