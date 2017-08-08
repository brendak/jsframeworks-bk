(function() {
	angular.module("myA")
	.controller("myC", MyC);
	function MyC($scope, $http, $q){
		$q.all([
			$http.get("https://api.github.com/users/angular/repos"),
			$http.get("https://api.github.com/repos/facebook/react"),
			$http.get("https://api.github.com/users/vuejs/repos"),
			$http.get("https://api.github.com/users/emberjs/repos")
		]).then(function(res){
			$scope.angularData = res[0].data;
			$scope.reactData = res[1];
			$scope.vueData = res[2].data;
			$scope.emberData = res[3].data;
			$scope.name = ["Angular", "React", "Vue", "Ember"];
			$scope.orderByField = '';
			$scope.reverseSort = false;
			// console.log(res)
		})
	}
})();
