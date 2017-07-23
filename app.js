var myApp = angular.module('myApp', ['ngRoute','ngResource']);

//ROUTES
myApp.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/forecast',{
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
});

//CUSTOM SERVICE
myApp.service('dataService', function(){
   this.cityService = 'New York, NY' 
});

//CONTROLLER
myApp.controller('homeController', ['$scope', 'dataService', function($scope, dataService){
$scope.enteredCity = dataService.cityService;
    $scope.$watch('enteredCity', function(){
       dataService.cityService = $scope.enteredCity; 
    });
}]);

myApp.controller('forecastController', ['$scope', 'dataService', function($scope, dataService){
    $scope.receivedCity = dataService.cityService;
}]);