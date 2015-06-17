'use strict';

/**
 * @ngdoc function
 * @name ommiApp.controller:SummaryCtrl
 * @description
 * # SummaryCtrl
 * Controller of the ommiApp
 */
angular.module('ommiApp')
  .controller('SummaryCtrl', function ($scope, $http, $modal, $sce) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('api/summary.json').success(function (data) {
      $scope.summary = data;
    });

    $scope.renderHtml = function (htmlCode) {
      return $sce.trustAsHtml(htmlCode);
    };

  });
