'use strict';

/**
 * @ngdoc function
 * @name ommiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ommiApp
 */
angular.module('ommiApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('api/address.json').success(function (data) {
      $scope.address = data;
    });

    $scope.isMobile = function() {};

    $scope.createMobilePhoneNr = function(telnr) {
      return 'tel:'+telnr.replace(/\s+/g, '');
    };
  });
