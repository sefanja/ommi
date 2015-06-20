'use strict';

/**
 * @ngdoc function
 * @name ommiApp.controller:SummaryCtrl
 * @description
 * # SummaryCtrl
 * Controller of the ommiApp
 */
angular.module('ommiApp')
  .controller('SummaryCtrl', function ($rootScope, $scope, $http, $modal, $sce) {
    if (!$rootScope.summary) {
      $http.get('api/summary.json').success(function (data) {
        $rootScope.summary = data;  // Bind to root scope for long-term memory of editable content.
      });
    }

    $scope.renderHtml = function (htmlCode) {
      return $sce.trustAsHtml(htmlCode);
    };
  });
