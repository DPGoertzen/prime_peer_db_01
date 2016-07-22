var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assignmentsSchema = new Schema({
  assignment_number: Number,
  student_name: String,
  score: Number,
  date_completed: Date
});

var Assignments = mongoose.model('Assignments', assignmentsSchema);

module.exports = Assignments;
