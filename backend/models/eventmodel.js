const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    eventname: String,
    eventtype: String,
    eventorganizer: String,
    eventcollabrators: String,
    eventvenue: String,
    eventcontact: Number,
    eventemail: String,
    eventdescription: String })

module.exports = mongoose.model('Event', eventSchema)