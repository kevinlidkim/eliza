angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/eliza', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/eliza/DOCTOR', {
			templateUrl: 'views/doctor.html',
			controller: 'MainController'
		})

		.otherwise({
      redirectTo: '/'
    });

	$locationProvider.html5Mode(true);



}])
