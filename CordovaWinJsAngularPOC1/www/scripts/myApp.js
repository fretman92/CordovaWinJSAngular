angular.module('myApp', ['winjs'])
 .controller('MyController', ['$scope', function ($scope) {
     $scope.greetMe = 'World';
 }]);