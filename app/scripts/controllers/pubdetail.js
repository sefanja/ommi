/* global _ */

'use strict';

/**
 * @ngdoc function
 * @name ommiApp.controller:PubDetailCtrl
 * @description
 * # PubDetailCtrl
 * Controller of the ommiApp
 */
angular.module('ommiApp')
  .controller('PubDetailCtrl', function ($scope, $anchorScroll, publications, selectedID) {
    function setPub(id) {
      $scope.pub = _.find(publications.items, function (pub) {
        return pub.id === id;
      });

      $scope.related = _.filter(publications.items, function (item) {
        return item.id !== $scope.pub.id && _.intersection(item.keywords, $scope.pub.keywords).length > 0;
      });
    }

    $scope.isCollapsed = true;

    $scope.showPublication = function (id) {
      setPub(id);
      $anchorScroll('top');
      $scope.isCollapsed = true;
    };

    setPub(selectedID);
  });
