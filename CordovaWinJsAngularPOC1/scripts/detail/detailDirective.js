angular.module('poc.Detail').directive('pocDetail', pocDetail);

function pocDetail() {
	return {
		restrict: 'A',
		templateUrl: 'templates/detail.html',
        controller: 'DetailCtrl',
		link: function (scope, element, attrs) {

		}
	};
}