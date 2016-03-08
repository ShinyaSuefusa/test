angular.module('myApp')
.controller("MyController", ["$scope", "$resource", function($scope, $resource) {
	var Data = $resource('api/v1.0/data');
	$scope.getValue = function() {
		Data.get({}, function(data) {
			$scope.data = data.value;
		});
	};
}])
.controller('ViewController', ['$scope', '$state', '$resource', function($scope,$state,$resource) {
	var Resource = $resource('api/v1.0/:path/:id', $state.params);
	console.log($state.params);
//	if ($state.params.list) {
//		$scope.list = $state.params.list;
//	} else {
		Resource.get({}, function(data) {
			angular.merge($scope, data);
			$scope.name = $state.current.name;
		});
		$state.params.initialize =false;
//	}
}])
;