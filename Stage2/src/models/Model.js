const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
});

// person model instance
const Person = new mongoose.model("person", personSchema);

module.exports = Person;
