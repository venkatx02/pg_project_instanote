const asyncHandler = require('express-async-handler')
const Event = require('../models/eventmodel')
const User = require('../models/usermodel')

// to read the event
// route - GET method- /api/events
//access - private

const readEvent = asyncHandler(async (req, res) => {
    const events = await Event.find()
    res.send(events)
})

// to create the event
// route - POST method- /api/events
//access - private

const createEvent = asyncHandler(async (req, res) => {
    if(!req.body.eventname && !req.body.eventdescription){
        throw new Error('Please fill all fields')
    }
    const event = await Event.create({
        eventname: req.body.eventname,
        eventtype: req.body.eventtype,
        eventorganizer: req.body.eventorganizer,
        eventcollabrators: req.body.eventcollabrators,
        eventvenue: req.body.eventvenue,
        eventcontact: req.body.eventcontact,
        eventemail: req.body.eventemail,
        eventdescription: req.body.eventdescription,

    })
    res.send(event)
})

// to update the event
// route - PUT method- /api/events
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

module.exports = {readEvent, createEvent, updateEvent, deleteEvent}