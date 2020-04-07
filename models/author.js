const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  firstName: { type: String, required: true},
  LastName: { type: String, required: true},
});

module.exports = mongoose.model('Author', AuthorSchema);