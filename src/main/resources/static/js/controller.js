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
	var Photo = $resource('api/v1.0/:path', {path: '@path'});
	Photo.get({path: $state.params.path}, function(photo) {
		angular.merge($scope, photo);
		$scope.path = $state.path;
	});
}])
;