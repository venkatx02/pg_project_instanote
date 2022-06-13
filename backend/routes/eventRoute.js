const express = require('express');
const router = express.Router()
const { readEvent, createEvent, updateEvent, deleteEvent } = require('../controllers/eventController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(readEvent).post(createEvent)
router.route('/:id').put(protect, updateEvent).delete(protect, deleteEvent)


module.exports = router