const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    eventname: String,
    eventdescription: String })

module.exports = mongoose.model('Event', eventSchema)