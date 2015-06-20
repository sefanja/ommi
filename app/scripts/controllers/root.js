'use strict';

/**
 * @ngdoc function
 * @name ommiApp.controller:RootCtrl
 * @description
 * # RootCtrl
 * Controller of the ommiApp
 */
angular.module('ommiApp')
  .controller('RootCtrl', function ($scope, $location,$http) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

    $http.get('api/root.json').success(function (data) {
      $scope.root = data;
    });
  });
