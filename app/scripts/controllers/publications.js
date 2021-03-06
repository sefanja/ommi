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

    $scope.search = {
      type: ''
    };

    $scope.openPubDetailModal = function (id) {
      $modal.open({
        templateUrl: 'views/pubdetail.html',
        controller: 'PubDetailCtrl',
        resolve: {
          publications: function() {
            return $scope.publications;
          },
          selectedID: function () {
            return id;
          }
        },
        animation: false // Without this, the backdrop won't go away (bug).
      });
    };

    $scope.highlight = function(text, search) {
      if (!search) {
        return $sce.trustAsHtml(text);
      }
      if (text) {
        return $sce.trustAsHtml(text.replace(new RegExp(search, 'gi'), '<span class="highlightedText">$&</span>'));
      }
    };

    $scope.pubTypeSelector = function() {
      if ($scope.publications && $scope.pubType !== $scope.publications.allTypesLabel) {
        return $scope.pubType;
      }
    };
  });
