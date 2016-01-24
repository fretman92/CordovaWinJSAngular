/*! CordovaWinJsAngularPOC1 - v1.0.0 - 2016-01-24 */
(function(angular) {
'use strict';
(function () {
    angular.module('poc.Detail', []);
}());
(function () {
    angular.module('poc.Detail').controller('DetailCtrl', Detail);

    Detail.$inject = ['$scope', ];

    function Detail($scope) {

    }
})();
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
(function () {
    angular.module('poc.Home', []);
}());
angular.module('poc.Home').controller('HomeCtrl', Home);

Home.$inject = ['$scope', ];

function Home($scope) {
	
}
angular.module('poc.Home').directive('pocHome', pocHome);

function pocHome() {
	return {
		restrict: 'A',
		templateUrl: 'templates/home.html',
        controller: 'HomeCtrl',
		link: function (scope, element, attrs) {

		}
	};
}})(window.angular);