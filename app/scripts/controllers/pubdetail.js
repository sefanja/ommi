'use strict';

/**
 * @ngdoc function
 * @name ommiApp.controller:PubDetailCtrl
 * @description
 * # PubDetailCtrl
 * Controller of the ommiApp
 */
angular.module('ommiApp')
  .controller('PubDetailCtrl', function ($scope, publication) {
    $scope.pub = publication;
  });
