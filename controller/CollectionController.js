angular.module('app')
	.controller('CollectionController',['$rootScope','$scope',function($rootScope,$scope){
		$scope.goState = $rootScope.goState;
		$scope.gohistory = $rootScope.gohistory;
	}])