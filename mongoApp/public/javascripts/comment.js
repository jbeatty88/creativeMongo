angular.module('comment', [])
.controller('MainCtrl', [
  '$scope',
  function($scope){
    var ProfessorList = [
        {
        "name": "Wan",
        "imgURL": "../public/images/wan.jpg"
        },
        {
        "name": "Ang",
        "imgURL": "../public/images/ang.jpg"
        },
        {
        "name": "Korra",
        "imgURL": "../public/images/Adams.jpg"
        }
    ];

    $scope.name = ProfessorList[1].name;
    $scope.imgURL = ProfessorList[1].imgURL;
  }
]);