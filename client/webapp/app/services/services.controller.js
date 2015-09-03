'use strict';

angular.module('starter')
  .controller('ServicesCtrl', function ($scope, $rootScope, $stateParams, $timeout) {
   
  if ($scope.isMobileApp() ===true) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);
  }
});
 