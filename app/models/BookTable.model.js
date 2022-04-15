const mongoose = require('mongoose')

const BookTableSchema = mongoose.Schema({
    booking_date: {
        type: Date,
        require: true
    },
    booking_time: {
        type: Date,
        require: true
    },
    approx_arrive_time: {
        type: Date,
        require: true
    },
    no_of_persons: {
        type: Number,
        require: true
    },
    comments: {
        type: String,
        require: true
    },
    status_id: {
        type: mongoose.Types.ObjectId,
        require: true,
        ref:'Status'
    }
})

module.exports = mongoose.model('Booktable', BookTableSchema)