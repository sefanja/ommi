/* global _ */

'use strict';

/**
 * @ngdoc function
 * @name ommiApp.controller:PublicationsCtrl
 * @description
 * # PublicationsCtrl
 * Controller of the ommiApp
 */
angular.module('ommiApp')
  .controller('PublicationsCtrl', function ($scope, $http, $modal, $sce) {
    $http.get('api/publications.json').success(function (data) {
      $scope.publications = data;
      $scope.years = _.unique(_.pluck(data.items, 'year'));
      $scope.types = _.unique(_.pluck(data.items, 'type'));

    });

    $scope.pubType = "";

    $scope.openPubDetailModal = function (publication) {
      $modal.open({
        templateUrl: 'views/pubdetail.html',
        controller: 'PubDetailCtrl',
        resolve: {
          publication: function () {
            return publication;
          }
        },
        animation: false // Without this, the backdrop won't go away (bug).
      });
    };

    $scope.highlight = function(text, search) {
      if (!search) {
        return $sce.trustAsHtml(text);
      }
      return $sce.trustAsHtml(decodeURI(encodeURI(text).replace(new RegExp(search, 'gi'), '<span class="highlightedText">$&</span>')));
    };

    $scope.pubTypeSelector = function() {

      if ($scope.pubType && $scope.pubType != $scope.publications.allTypesLabel) {
        return $scope.pubType;
      }
      return "";
    }
  });
