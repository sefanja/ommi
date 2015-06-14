'use strict';

/**
 * @ngdoc function
 * @name ommiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ommiApp
 */
angular.module('ommiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
