angular.module('myApp')
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/girl');
	$stateProvider
		.state('view', {
			url: '/:path',
			views: {
				'view': {
					templateUrl:'/page',
					controller:'ViewController'
				}
			}
		});
});