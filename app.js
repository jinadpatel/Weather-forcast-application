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
    .when('/forecast/:num', {
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

myApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'dataService', function($scope, $resource, $routeParams, dataService){
    $scope.receivedCity = dataService.cityService;
    
    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=d755dcd3e6712fa7c51b479098be0c77');
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.receivedCity, cnt: $routeParams.num || 2});
    //console.log($scope.weatherResult);
    
                                        
    $scope.convertToFaranheit = function(kelvin){
      var faranheit = Math.round(((kelvin - 273)*1.8) + 32);
        return faranheit;
    };
    
    $scope.dateConverter = function(date){
      return new Date(date*1000);  
    };
}]);
