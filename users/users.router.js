const router = require('express').Router()


const userServices = require('./users.services')

router.get('/users', userServices.getAllusers)
router.post('/users', userServices.postNewUser)

router.get('/users/:id', userServices.getUserById)

module.exports = router