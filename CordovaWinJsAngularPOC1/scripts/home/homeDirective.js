angular.module('poc.Home').directive('pocHome', pocHome);

function pocHome() {
	return {
		restrict: 'A',
		templateUrl: 'templates/home.html',
        controller: 'HomeCtrl',
		link: function (scope, element, attrs) {

		}
	};
}