angular.module('SignUpCtrl', []).controller('SignUpController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {

  $scope.register = function () {

    $scope.error = false;
    $scope.disabled = true;
    $scope.errorMessage = "";

    UserService.signup($scope.registerForm)
      .then(function () {
        $location.path('/login');
        $scope.disabled = false;
        $scope.registerForm = {};
      })
      .catch(function () {
        $scope.error = true;
        $scope.errorMessage = "Something went wrong!";
        $scope.disabled = false;
        $scope.registerForm = {};
      });

  };
  
}]);

