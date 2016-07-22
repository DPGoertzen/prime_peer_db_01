angular.module('assignmentApp').factory('DataService', function($http){
  var data = {};

  function handleGet(response){
    data.assignments = response.data;
  }

  function handleId(response){
    data.id = response.data;
    console.log("here's our id:", data.id);
  }

  function handlePost(response){
    console.log("Posted successfully!");
  }

  function handleFailure(response){
    console.log("there's been a tire fire:", response);
  }

  function getAssignment(){
    $http.get('/assignments').then(handleGet, handleFailure);
  }

  function getId(id){
    $http.get('/assignments/' + id).then(handleId, handleFailure);
  }

  function postAssignment(sendData){

    console.log("button clicked", sendData);
    $http.post('/assignments', sendData).then(handlePost, handleFailure);
  }

  getAssignment();

  return {
    data: data,
    getAssignment: getAssignment,
    postAssignment: postAssignment,
    getId: getId
  }
});
