angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/eliza', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/eliza/DOCTOR', {
			templateUrl: 'views/signup.html',
			controller: 'SignUpController'
		})

		.otherwise({
      redirectTo: '/'
    });

	$locationProvider.html5Mode(true);



}])
