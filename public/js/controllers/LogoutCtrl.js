angular.module('LogoutCtrl', []).controller('LogoutController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {

  $scope.logout = function () {

    UserService.logout()
      .then(function() {
        $location.path('/login');
      });

  };
  
}]);

