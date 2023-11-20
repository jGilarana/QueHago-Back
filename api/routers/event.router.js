const {getAllEvents, getOneEvent, createEvent, updateEvent, deleteEvent} = require('../controllers/event.controller')
const router = require('express').Router()
const {checkAuth, checkClub, checkAdmin} = require('../middleware')


router.get('/', getAllEvents)
router.get('/:id', checkAuth, getOneEvent)
router.post('/', checkAuth, createEvent)
router.put('/:id', checkAuth, updateEvent)
router.delete('/:id', checkAuth, checkAdmin, deleteEvent)

module.exports = router