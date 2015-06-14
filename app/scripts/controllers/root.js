'use strict';

/**
 * @ngdoc function
 * @name ommiApp.controller:RootCtrl
 * @description
 * # RootCtrl
 * Controller of the ommiApp
 */
angular.module('ommiApp')
  .controller('RootCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });
