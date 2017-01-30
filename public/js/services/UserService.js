angular.module('UserServ', []).factory('UserService', ['$q', '$timeout', '$http', function($q, $timeout, $http) {

  var user = null;

  return {
    signup : function(userData) {
      var deferred = $q.defer();

      $http.post('/signup', userData)
        .success(function(data, status) {
          if (status === 200 && data.status) {
            deferred.resolve();
          } else {
            deferred.reject();
          }
        })
        .error(function(data) {
          deferred.reject();
        })
        return deferred.promise;
    },
    login : function(userData) {
      var deferred = $q.defer();

      $http.post('/login', userData)
        .success(function(data, status) {
          if (status === 200 && data.status) {
            user = true;
            deferred.resolve();
          } else {
            user = false;
            deferred.reject();
          }
        })
        .error(function(data) {
          user = false;
          deferred.reject();
        });
        return deferred.promise;
    },
    logout : function() {
      var deferred = $q.defer();

      $http.get('/logout')
        .success(function(data) {
          user = false;
          deferred.resolve();
        })
        .error(function(data) {
          user = false;
          deferred.reject();
        })
        return deferred.promise;
    },
    isLoggedIn : function() {
      if (user) {
        return true;
      } else {
        return false;
      }
    },
    getUserStatus : function() {
      return $http.get('/status')
        .success(function(data) {
          if (data.status) {
            user = true;
          } else {
            user = false;
          }
        })
        .error(function(data) {
          user = false;
        });
    }
  }

}]);

