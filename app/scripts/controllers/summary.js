'use strict';

/**
 * @ngdoc function
 * @name ommiApp.controller:SummaryCtrl
 * @description
 * # SummaryCtrl
 * Controller of the ommiApp
 */
angular.module('ommiApp')
  .controller('SummaryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
