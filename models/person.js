const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
  },
  rating: {
    type: Number,
  },
  contact: {
    type: Number,
  },
});

module.exports = mongoose.model("Person", personSchema);
