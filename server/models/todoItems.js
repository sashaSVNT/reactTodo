const mongoose = require('mongoose');

const TodoItemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model('todo', TodoItemSchema);