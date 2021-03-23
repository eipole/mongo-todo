const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  addedDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model("Todo", todoSchema)
