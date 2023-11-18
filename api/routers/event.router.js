const {getAllEvents, getOneEvent, createEvent, updateEvent, deleteEvent} = require('../controllers/event.controller')
const router = require('express').Router()

router.get('/', getAllEvents)
router.get('/:id', getOneEvent)
router.post('/', createEvent)
router.put('/:id', updateEvent)
router.delete('/:id', deleteEvent)

module.exports = router