'use strict';

angular.module('starter')
  .controller('DashCtrl', function ($scope, $http,$stateParams, $timeout, Auth) {

    var url = window.location.href; 
      if (url.indexOf('ionic') !==-1) {

      $scope.$parent.showHeader();
      $scope.$parent.clearFabs();
      $scope.isExpanded = false;
      $scope.$parent.setExpanded(false);
      $scope.$parent.setHeaderFab(false);

      // // Set Motion
      // $timeout(function() {
      //     ionicMaterialMotion.slideUp({
      //         selector: '.slide-up'
      //     });
      // }, 300);
 

    }

    $scope.isLoggedIn = Auth.isLoggedIn;
 
  });
 