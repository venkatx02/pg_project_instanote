const asyncHandler = require('express-async-handler');
const multer = require('multer');
const Event = require('../models/eventmodel');
const User = require('../models/usermodel');
const path = require('path');


//storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
});

// to read the event
// route - GET method- /api/events
//access - public

const readEvent = asyncHandler(async (req, res) => {
    const events = await Event.find()
    res.send(events)
})

// to create the event
// route - POST method- /api/events
//access - private

const createEvent = asyncHandler(async (req, res) => {
    console.log(req.file)
    if(!req.body.eventname){
        throw new Error('Please fill all fields')
    }
    const event = await Event.create({
        user: req.user.id,
        eventname: req.body.eventname,
        eventtype: req.body.eventtype,
        eventorganizer: req.body.eventorganizer,
        eventcollabrators: req.body.eventcollabrators,
        eventdate: req.body.eventdate,
        eventvenue: req.body.eventvenue,
        eventcontact: req.body.eventcontact,
        eventemail: req.body.eventemail,
        eventdescription: req.body.eventdescription,

    })
    res.send(event)
})

// to fetch an event
// route - GET method- /api/events/:id
//access - public

const readSingleEvent = asyncHandler(async (req, res) => {
    const event = await Event.findById(req.params.id)
    res.send(event)
})

// to update the event
// route - PUT method- /api/events/:id
//access - private

const updateEvent = asyncHandler(async (req, res) => {
    const event = await Event.findById(req.params.id)
    if(!event){
        throw new Error('Event not found')
    }

    //check for user
    if(!req.user){
        throw new Error('User not found')
    }

    //making sure logged in user matches the event user
    if(event.user.toString() !== req.user.id){
        throw new Error('User not authorized')
    }

    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.send(updatedEvent)
})

// to delete the event
// route - DELETE method- /api/events
//access - private

const deleteEvent = asyncHandler(async (req, res) => {
    const event = await Event.findById(req.params.id)
    if(!event){
        throw new Error('No event found')
    }

        //check for user
        if(!req.user){
            throw new Error('User not found')
        }
    
        //making sure logged in user matches the event user
        if(event.user.toString() !== req.user.id){
            throw new Error('User not authorized')
        }
        
    await event.remove()
    res.send({ id: req.params.id })
})

module.exports = {readEvent, createEvent, updateEvent, deleteEvent, readSingleEvent, upload}