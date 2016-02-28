angular
.module("myApp", [])
.controller("MyController", ["$scope", "$http", function($scope, $http) {
	$scope.getValue = function() {
		$http({method: 'GET', url: '/api/data'})
		.success(function(data) {
			$scope.data = data.value;
		});
	};
}])
;