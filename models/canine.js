const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const canineSchema = new Schema({
    name: {
        type: String
    },
    breed: {
        type: String
    },
    age: {
        type: String
    },
    rating: {
        type: Number
    },
    walkDays: {
        type: String,
        enum: [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ]

    },
    imgUrl: {
        type: String
    }
})

module.exports = mongoose.model("Canine", canineSchema);
