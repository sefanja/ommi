

'use strict';

/**
 * @ngdoc function
 * @name ommiApp.controller:CvCtrl
 * @description
 * # CvCtrl
 * Controller of the ommiApp
 */
angular.module('ommiApp')
  .controller('CvCtrl', function ($scope, $http, $modal, $sce) {
    $http.get('api/cv.json').success(function (data) {
      $scope.cvs = data;
    });

    $scope.renderHtml = function (htmlCode) {
      return $sce.trustAsHtml(htmlCode);
    };

    $scope.highlight = function(text, search) {
      if (!search) {
        return $sce.trustAsHtml(text);
      }
      if (text) {
        return $sce.trustAsHtml(text.replace(new RegExp(search, 'gi'), '<span class="highlightedText">$&</span>'));
      }
    };
  });
