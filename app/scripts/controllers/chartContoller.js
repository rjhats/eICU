'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */

angular.module('sbAdminApp')
  .controller('Vitals', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.line = {
	    labels: ['-10', '-9', '-8', '-7', '-6', '-5', '-4', '-3', '-2', '-1'],
	    series: ['Heart Rate', 'Blood Pressure', 'Temperature'],
	    data: [
	      [105,104,99,98,100,103,104, 103, 102, 100 ],
          [125,127,126,124, 122,120, 118,118, 119, 120 ],
          [36.5,36,36.5,36.5,37,37,37, 37, 37,37 ],
	    ],
	    onClick: function (points, evt) {
	      console.log(points, evt);
	    }
    };
}]);

angular.module('sbAdminApp')
  .controller('ChartCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.line = {
	    labels: ['Dec 22', 'Dec 24', 'Dec 24', 'Dec 25', 'Dec 26', 'Dec 27', 'Dec 28'],
	    series: ['[Cr]'],
	    data: [
	      [0.83,1.50,2.27,2.57,2.16,1.62,1.39 ],
	    ],
	    onClick: function (points, evt) {
	      console.log(points, evt);
	    }
    };
    $scope.$on('SIZE_CHANGE', function (e, d) {
                $timeout(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 200)
    });
}]);

angular.module('sbAdminApp')
  .controller('Calcium', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.line = {
	    labels: ['Dec 22', 'Dec 23', 'Dec 24', 'Dec 25', 'Dec 26', 'Dec 27', 'Dec 28'],
	    series: ['[Ca+]'],
	    data: [
	      [9.23,9.50,10.27,9.57,9.16,9.62,9.39 ],
	    ],
	    onClick: function (points, evt) {
	      console.log(points, evt);
	    }
    };
}]);

angular.module('sbAdminApp')
  .controller('Potassium', ['$scope', '$timeout', function ($scope, $timeout) {
      $scope.line = {
	    labels: ['Dec 22', 'Dec 23', 'Dec 24', 'Dec 25', 'Dec 26', 'Dec 27', 'Dec 28'],
	    series: ['[K-]'],
	    data: [
	      [4.83,4.50,4.27,4.57,5.16,4.82,4.39 ],
	    ],
	    onClick: function (points, evt) {
	      console.log(points, evt);
	    }
    };
}]);

