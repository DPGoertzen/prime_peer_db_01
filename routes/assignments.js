var router = require('express').Router();

var Assignments = require('../models/assignments')

router.get('/:id?', function(request, response){
  if(!request.params.id){
    Assignments.find({}, function(err, assignments){
      if(err){
        console.log("find error", err);
        response.sendStatus(500);
      } else {
        response.send(assignments);
      }
    });
  } else {
    var id = request.params.id;
    Assignments.findById(id, function(err, assignment){
      if(err){
        console.log("find error", err);
        response.sendStatus(500);
      } else {
        response.send(assignment)
      }
    });
  }

});

router.post('/', function(request, response){
  console.log("creating assignment");
  console.log(request.body);
  var data = request.body;
  var createdAssignment = new Assignments({
    assignment_number: data.assignment_number,
    student_name: data.student_name,
    score: data.score,
    date_completed: new Date()
  });

  createdAssignment.save(function(err){
    if(err){
      console.log('creation error:', err);
      response.sendStatus(500);
    } else {
      console.log('creation success!');
      response.sendStatus(200);
    }

  });

});

module.exports = router;
