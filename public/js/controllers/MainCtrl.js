angular.module('MainCtrl', []).controller('MainController', ['$scope', 'MainService', function($scope, MainService) {

  $scope.input = "";
  $scope.name = "";
  $scope.date = "";
  $scope.send_message = "";

  $scope.register = function() {
    if ($scope.input != "") {
      var obj = {
        name: $scope.input
      }
      MainService.register(obj)
        .then(function(data) {
          $scope.date = data.date;
          $scope.name = data.name;
        })
    }
  };

  $scope.reveal = function() {
    if ($scope.name != "") {
      return true;
    } else {
      return false;
    }
  }

  $scope.send_text = function() {
    if ($scope.send_text != "") {
      var obj = {
        human: $scope.send_text
      }
      MainService.send_text(obj)
        .then(function(data) {
          console.log(data);
        })
    }
  }
  
}]);

