const Favorite = require("../api/models/favorite.model")
const Club = require("../api/models/club.model")
const Event = require("../api/models/event.model")
const Rating = require("../api/models/rating.model")
const User = require("../api/models/user.model")

function setRelations() {
  Club.hasMany(Event)
  Event.belongsTo(Club, { onDelete: 'CASCADE', onUpdate: 'CASCADE', foreignKey: "clubId" }) //
  
  Event.belongsToMany(User, { through: Rating, as:'RatedByUsers' })
  User.belongsToMany(Event, {through: Rating, as:'UsersRatedEvent' })

  Event.belongsToMany(User, { through: Favorite, as:'FavoritedByUsers'})
  User.belongsToMany(Event, {through: Favorite, as:'UsersFavoriteEvent' })
}

module.exports = setRelations


