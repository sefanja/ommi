'use strict';

/**
 * @ngdoc function
 * @name ommiApp.controller:CvCtrl
 * @description
 * # CvCtrl
 * Controller of the ommiApp
 */
angular.module('ommiApp')
  .controller('NewsCtrl', function ($scope, $http, $modal, $sce) {
    $http.get('api/news.json').success(function (data) {
      $scope.newsitems = data;
    });

    $scope.renderHtml = function (htmlCode) {
      return $sce.trustAsHtml(htmlCode);
    };

    $scope.predicate = 'date';
    $scope.reverse = true;
    $scope.order = function(predicate) {
      $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
      $scope.predicate = predicate;
    };

    $scope.formatDate =  function(date) {
      var formatedDate = new Date(date);
      var day = formatedDate.getDate();
      var month = formatedDate.getMonth();

      return  (day<10?'0'+day:day) +'-'+ (month<10?'0'+month:month) +'-'+ formatedDate.getFullYear();
    };
  });
