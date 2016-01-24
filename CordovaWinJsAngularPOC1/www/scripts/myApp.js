// Dépendances
var appModule = angular.module('myApp', [
    'ngRoute',

    'winjs',

    'poc.Home',
    'poc.Detail',
]);

// Config
// - routes définition
appModule.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $routeProvider.when('/', {
        template: '<div poc-home></div>',
    }).when('/home', {
        template: '<div poc-home></div>',
    }).when('/detail', {
        template: '<div poc-detail></div>',
    }).otherwise({
        redirectTo: '/'
    });
}]);