const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const canineSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    breed: {
        type: String,
        trim: true,
    },
    age: {
        type: String,
        trim: true,
    },
    rating: {
        type: Number,
        trim: true,
    },
    walkDays: {
        type: String,
        trim: true,
        enum: [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ]

    },
    imgUrl: {
        type: String,
        trim: true,
    }
})

module.exports = mongoose.model("Canine", canineSchema);
