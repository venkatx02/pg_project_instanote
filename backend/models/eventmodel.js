const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    eventname: String,
    eventdescription: String })

module.exports = mongoose.model('Event', eventSchema)