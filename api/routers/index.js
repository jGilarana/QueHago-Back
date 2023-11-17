const router = require('express').Router()

router.use('/users', require('./user.router'))
/* router.use('/events', require('./event.router'))
router.use('/rantoings', require('./rantoing.router'))
router.use('/favorites', require('./favorite.router'))
router.use('/ratings', require('./rating.router')) */

module.exports = router