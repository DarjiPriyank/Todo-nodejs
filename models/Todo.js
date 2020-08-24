const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
    todo: {
      type: String,
      require: true
    },
    completed: {
      type: Boolean,
      default: false,
    },
    date: {
     type: Date,
     default: Date.now
   }
})

module.exports = mongoose.model('todo', TodoSchema);
