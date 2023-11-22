const Club = require("../models/club.model");
const Event = require("../models/event.model");

async function getAllClubs(req, res) {
  try {
    const clubs = await Club.findAll();
    res.status(200).json(clubs);
  } catch (error) {
    res.status(403).send(error.message);
  }
}

async function getOneClub(req, res) {
  try {
    const club = await Club.findByPk(req.params.id);
    res.status(200).json(club);
  } catch (error) {
    res.status(403).send(error.message);
  }
}

async function createClub(req, res) {
  try {
    const club = await Club.create(req.body);
    res.status(200).send("club created");
  } catch (error) {
    res.status(403).send(error.message);
  }
}

async function updateClub(req, res) {
  try {
    const [club, clubExists] = await Club.update(req.body, {
      where: { id: req.params.id },
    });
    if (clubExists === 0) {
      res.status(404).send("No club found");
    }

    return res.status(200).send("club updated");
  } catch (error) {
    res.status(403).send(error.message);
  }
}

async function deleteClub(req, res) {
  try {
    const club = await Club.destroy({ where: { id: req.params.id } });
    return res.status(200).json(club);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function createClubsEvent(req, res) {
  try {
    /*   let event
    if(res.locals.member.subscriptionStatus === 1){
      event = await Event.create(req.body)
    }
    const club = await Club.findByPk(res.locals.member.id)
    console.log(club)
    if (club === null) {
      const adminEvent = await Event.create(req.body)
      //console.log(adminEvent)
      return res.status(200).send('admin has created this Event, remind to assign the CLUB ID!')
    }
    await club.addEvent(event) */

    if (res.locals.member.role === "admin") {
      const adminEvent = await Event.create(req.body);
      return res
        .status(200)
        .send("admin has created this Event, remind to assign the CLUB ID!");
    } else {
      const event = await Event.create(req.body);
      const club = await Club.findByPk(res.locals.member.id);
      await club.addEvent(event)
      return res.status(200).send("Event created");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getClubsEvents(req, res) {
  try {
    const club = await Club.findByPk(res.locals.member.id);
    console.log(res.locals);
    const events = await club.getEvents();
    res.status(200).json(events);
  } catch (error) {
    res.status(403).send(error.message);
  }
}

module.exports = {
  getAllClubs,
  getOneClub,
  createClub,
  updateClub,
  deleteClub,
  createClubsEvent,
  getClubsEvents,
};
