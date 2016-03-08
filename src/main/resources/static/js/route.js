angular.module('myApp')
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('/', '/baby')
	$urlRouterProvider.otherwise('/baby');
	$stateProvider
		.state('list', {
			url: '/:path',
			params: {
				initialize: false,
				list: null
		    },
			views: {
				'@': {
					templateUrl:'/list',
					controller:'ViewController'
				}
			}
		})
		.state('list.page', {
			url: '/:id',
			views: {
				'@': {
					templateUrl:'/page',
					controller:'ViewController'
				}
			}
		});
});