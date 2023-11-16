const Favorite = require('../api/models/favorite.model')
const Club = require('../api/models/club.model')
const Event = require('../api/models/event.model')
const Rating = require('../api/models/rating.model')
const User = require('../api/models/user.model')

function setRelations() {


    Club.hasMany(Event);
    Event.belongsTo(Club, { foreignKey: 'club_id' })  //


    User.hasMany(Rating);
    Rating.belongsTo(User, { foreignKey: 'user_id' });;

    Event.hasMany(Rating);
    Rating.belongsTo(Event, { foreignKey: 'event_id' })

    User.hasMany(Favorite, { foreignKey: 'user_id' })
    Favorite.belongsTo(User)


    Event.hasMany(Favorite, { foreignKey: 'event_id' })
    Favorite.belongsTo(Event)
}



module.exports = setRelations