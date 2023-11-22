const Favorite = require("../models/favorite.model")

0
async function getAllFavorites(req, res) {
  try {
    const favorites = await Favorite.findAll()
    res.status(200).json(favorites)
  } catch (error) {
    res.status(403).send(error.message)
  }
}

async function getOneFavorite(req, res) {
  try {
    const favorite = await Favorite.findByPk(req.params.id)
    res.status(200).json(favorite)
  } catch (error) {
    res.status(403).send(error.message)
  }
}

async function createFavorite(req, res) {
  try {
    const favorite = await Favorite.create(req.body)
    res.status(200).send("favorite created")
  } catch (error) {
    res.status(403).send(error.message)
  }
}

async function updateFavorite(req, res) {
  try {
    const [favorite, favoriteExists] = await Favorite.update(req.body, {
      where: { id: req.params.id },
    })

    if (favoriteExists === 0) {
      res.status(404).send("No favorite found")
    }
    return res.status(200).json(favorite)
  } catch (error) {
    res.status(403).send(error.message)
  }
}

async function deleteFavorite(req, res) {
  try {
    const favorite = await Favorite.destroy({ where: { eventId: req.params.id } })
    return res.status(200).json(favorite)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllFavorites,
  getOneFavorite,
  createFavorite,
  updateFavorite,
  deleteFavorite,
}
