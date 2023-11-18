const Event = require("../models/event.model")

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll()
    res.status(200).json(events)
  } catch (error) {
    res.status(400).error(error.message)
  }
}

const getOneEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id)
    res.status(200).json(event)
  } catch (error) {
    res.status(400).error(error.message)
  }
}

const createEvent = async(req,res) => {
   try {
    const event = await Event.create(req.body)
    res.status(200).send("event created")
   } catch (error) {
    res.status(403).send(error.message)
   }
} 

const updateEvent = async (req, res) => {
  try {
    const [event, eventExists] = await Event.update(req.body, {
      where: { id: req.params.id },
    })
    if (!eventExists) {
     return res.status(404).send("No event found")
    }
    return res.status(200).json(event)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

async function deleteEvent(req, res) {
  try {
    const event = await Event.destroy({ where: { id: req.params.id } })
    return res.status(200).json(event)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllEvents,
  getOneEvent,
  createEvent,
  updateEvent,
  deleteEvent,
}
