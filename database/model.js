const Favorite = require('../api/models/favorite.model')
const Club = require('../api/models/club.model')
const Event = require('../api/models/event.model')
const Rating = require('../api/models/rating.model')
const User = require('../api/models/user.model')

function setRelations() {


    Club.hasMany(Event);
    Event.belongsTo(Club, { foreignKey: 'clubId' })  //


    User.hasMany(Rating);
    Rating.belongsTo(User, { foreignKey: 'userId' });;

    Event.hasMany(Rating);
    Rating.belongsTo(Event, { foreignKey: 'eventId' })

    User.hasMany(Favorite, { foreignKey: 'userId' })
    Favorite.belongsTo(User)


    Event.hasMany(Favorite, { foreignKey: 'eventId' })
    Favorite.belongsTo(Event)
}



module.exports = setRelations