const express = require('express')
const router = express.Router()

const {
    getBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp,
    getBootcampsInRadius
} = require('../controllers/bootcamp.controller')

// route forward
const courseRouter = require('./course.router')

router.use('/:bootcampId/courses', courseRouter)


router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius)

router.route('/')
.get(getBootcamps)
.post(createBootcamp)

router.route('/:id')
.get(getBootcamp)
.put(updateBootcamp)
.delete(deleteBootcamp)

module.exports = router
