angular.module('LoginCtrl', []).controller('LoginController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {

  $scope.login = function () {

    $scope.error = false;
    $scope.disabled = true;
    $scope.errorMessage = "";

    UserService.login($scope.loginForm)
      .then(function () {
        $location.path('/');
        $scope.disabled = false;
        $scope.loginForm = {};
      })
      .catch(function () {
        $scope.error = true;
        $scope.errorMessage = "Invalid username and/or password";
        $scope.disabled = false;
        $scope.loginForm = {};
      });

  };
  
}]);

