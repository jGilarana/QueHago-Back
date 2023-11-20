const Club = require("../models/club.model")
const Event = require("../models/event.model")

async function getAllClubs(req, res) {
  try {
    const clubs = await Club.findAll()
    res.status(200).json(clubs)
  } catch (error) {
    res.status(403).send(error.message)
  }
}

async function getOneClub(req, res) {
  try {
    const club = await Club.findByPk(req.params.id)
    res.status(200).json(club)
  } catch (error) {
    res.status(403).send(error.message)
  }
}

async function createClub(req, res) {
  try {
    const club = await Club.create(req.body)
    res.status(200).send("club created")
  } catch (error) {
    res.status(403).send(error.message)
  }
}

async function updateClub(req, res) {
  try {
    const [club, clubExists] = await Club.update(req.body, {
      where: { id: req.params.id },
    })
    if (clubExists === 0) {
      res.status(404).send("No club found")
    }

    return res.status(200).send("club updated")
  } catch (error) {
    res.status(403).send(error.message)
  }
}

async function deleteClub(req, res) {
  try {
    const club = await Club.destroy({ where: { id: req.params.id } })
    return res.status(200).json(club)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createClubsEvent(req, res) {
  try {
    const event = await Event.create(req.body)
    const club = await Club.findByPk(res.locals.member.id)
    await club.addEvent(event)
    return res.status(200).send('Event added!')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

async function updateClubsEvent(req,res) {
  try {
    const event = await Event.update(req.body, {
      where: { id: req.params.id },
    })   
    const club = await Club.findByPk(res.locals.member.id)
    await club.setEvents(event)
    return res.status(200).send('Event updated!')
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

module.exports = {
  getAllClubs,
  getOneClub,
  createClub,
  updateClub,
  deleteClub,
  createClubsEvent,
  updateClubsEvent
}
