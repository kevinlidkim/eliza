angular.module('MainCtrl', []).controller('MainController', ['$scope', 'MainService', function($scope, MainService) {

  $scope.name_input = "";
  $scope.name = "";
  $scope.date = "";
  $scope.input = "";
  $scope.msg_history = [];

  $scope.register = function() {
    if ($scope.name_input != "") {
      var obj = {
        name: $scope.name_input
      }
      MainService.register(obj)
        .then(function(data) {
          $scope.date = data.date;
          $scope.name = data.name;
        })
    }
  };

  $scope.reveal_name = function() {
    if ($scope.name != "") {
      return true;
    } else {
      return false;
    }
  }

  $scope.send_text = function() {
    if ($scope.input != "") {
      var obj = {
        human: $scope.input
      }
      $scope.msg_history.push($scope.input);
      MainService.send_text(obj)
        .then(function(data) {
          $scope.msg_history.push(data.eliza);
          $scope.input = "";
        })
    }
  }

  $scope.reveal_msg_history = function() {
    if ($scope.msg_history.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  
}]);

