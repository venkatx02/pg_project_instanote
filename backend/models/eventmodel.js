const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    eventname: String,
    eventtype: String,
    eventorganizer: String,
    eventcollabrators: String,
    eventdate: String,
    eventvenue: String,
    eventcontact: Number,
    eventemail: String,
    eventdescription: String,
    eventprice: Number,
    eventimage:{
        type: String
    }})

module.exports = mongoose.model('Event', eventSchema)