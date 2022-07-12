const express = require('express');
const router = express.Router()
const { readEvent, createEvent, updateEvent, deleteEvent, readSingleEvent} = require('../controllers/eventController')
const {protect} = require('../middleware/authMiddleware')
const {upload} = require('../controllers/eventController')

router.route('/').get(readEvent).post(protect, upload.single('eventimage'), createEvent)
router.route('/:id').put(protect, updateEvent).delete(protect, deleteEvent).get(readSingleEvent)


module.exports = router