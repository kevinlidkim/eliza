angular.module('MainServ', []).factory('MainService', ['$q', '$timeout', '$http', function($q, $timeout, $http) {

  return {

    register : function(obj) {
      return $http.post('/register', obj)
        .then(function(data) {
          // console.log(data);
          return data.data.obj;
        })
    },

    send_text : function(obj) {
      return $http.post('/send_text', obj)
        .then(function(data) {
          // console.log(data);
          return data.data;
        })
    }
    
  }

}]);

