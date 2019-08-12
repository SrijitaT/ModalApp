const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotesSchema = new Schema({content: {
    type: String,
    required: true
  }})
  module.exports = Notes = mongoose.model("notes", NotesSchema);