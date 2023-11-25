const { postEventImage } = require('../../Cloudinary/cloudycontrol')
const {updateOwnClub, getAllClubs, getOneClub, createClub, updateClub, deleteClub, createClubsEvent, getClubsEvents} = require('../controllers/club.controller')
const { checkAuth, checkAdmin, checkClub } = require('../middleware')
const router = require('express').Router()
const multer = require('multer')
const upload = multer({dest: './Assets/uploads'})

router.get('/', checkAuth, getAllClubs)
router.put('/postimage/:id',upload.single('file'), postEventImage)
router.post('/create', checkAuth,  createClubsEvent)
router.get('/events', checkAuth, getClubsEvents)
router.put('/profile', checkAuth, updateOwnClub)
router.get('/:id', checkAuth, getOneClub)

router.post('/', checkAuth, createClub)
router.put('/:id', checkAuth, updateClub)
router.delete('/:id', deleteClub)

module.exports = router