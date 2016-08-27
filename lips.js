var app1 = angular.module('app1', []);

app1.controller('ctrl1', function($scope) {

  $scope.randomNum1 = Math.floor((Math.random() * 11) + 1);
  $scope.randomNum2 = Math.floor((Math.random() * 10) + 1);

  $scope.words = ['Rockman','Heatman','Dr. Willy','Airman','Metalman','Bubbleman','Blaster','Snakeman','Woodman','is','else','run','like','go'];

});



app1.controller('lips', function($scope) {

  $scope.words = [
    {},
  ];

  $scope.randomNum1 = Math.floor((Math.random() * 11) + 1);

  $scope.genLips = function(){

  };

});
