const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const canineSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
  },
  age: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

module.exports = mongoose.model("Canine", canineSchema);
