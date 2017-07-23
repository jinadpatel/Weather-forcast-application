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

//CONTROLLER
myApp.controller('homeController', ['$scope', function($scope){
    
}]);

myApp.controller('forecastCOntroller', ['$scope', function($scope){
    
}]);