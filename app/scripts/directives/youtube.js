'use strict';

angular.module('ommiApp')
  .directive('youtube', function ($sce) {
    return {
      restrict: 'EA',
      scope: {code: '='},
      replace: true,
      template: '<iframe style="width:560px; height:315px; max-width:100%" ng-src="{{url}}" frameborder="0" allowfullscreen></iframe>',
      link: function (scope) {
        scope.$watch('code', function (newVal) {
          if (newVal) {
            scope.url = $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + newVal);
          }
        });
      }
    };
  });
