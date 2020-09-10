const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredNumber = {
    type: Number,
    required: true
}

const date = {
    type: Date,
    default: Date.now()
};

const logEntrySchema = new Schema({

    title: String,
    description: String,
    comments: String,
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    date: date,
    image: String (URL),
    latitude: {
        ...requiredNumber,
        min: -90,
        max: 90
    },
    longitude: {
        ...requiredNumber,
        min: -180,
        max: 180
    },
    visitDate: date,
    timestamps: true
})

const LogEntry = mongoose.model('LogEntry', logEntrySchema)

module.exports = LogEntry
