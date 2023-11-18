const Rating = require("../models/rating.model")

async function getAllRatings(req, res) {
  try {
    const ratings = await Rating.findAll()
    res.status(200).json(ratings)
  } catch (error) {
    res.status(403).send(error.message)
  }
}

async function getOneRating(req, res) {
  try {
    const rating = await Rating.findByPk(req.params.id)
    res.status(200).json(rating)
  } catch (error) {
    res.status(403).send(error.message)
  }
}

async function createRating(req, res) {
  try {
    const rating = await Rating.create(req.body)
    res.status(200).send("rating created")
  } catch (error) {
    res.status(403).send(error.message)
  }
}

async function updateRating(req, res) {
  try {
    const [rating, ratingExists] = await Rating.update(req.body, {
      where: { id: req.params.id },
    })

    if (!ratingExists) {
      res.status(404).send("No rating found")
    }
    return res.status(200).json(rating)
  } catch (error) {
    res.status(403).send(error.message)
  }
}

async function deleteRating(req, res) {
  try {
    const rating = await Rating.destroy(req.params.id)
    return res.status(200).json(rating)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


module.exports = {
    getAllRatings,
    getOneRating,
    createRating,
    updateRating,
    deleteRating
}