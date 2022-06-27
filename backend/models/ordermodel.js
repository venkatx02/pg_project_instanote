const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    isPaid: Boolean,
    amount: Number,
    razorpay: {
        orderID: String,
        paymentID: String,
        signature: String
    }
})

module.exports = mongoose.model('Order', orderSchema)