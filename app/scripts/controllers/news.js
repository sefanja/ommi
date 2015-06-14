'use strict';

/**
 * @ngdoc function
 * @name ommiApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the ommiApp
 */
angular.module('ommiApp')
  .controller('NewsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
