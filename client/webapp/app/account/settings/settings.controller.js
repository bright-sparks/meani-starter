'use strict';

angular.module('starter')
  .controller('SettingsCtrl', function ($scope, User, Auth,$stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.errors = {};
    $scope.user = Auth.getCurrentUser; 
 
    var url = window.location.href; 
    if (url.indexOf('ionic') !==-1) {
      $scope.$parent.showHeader();
      $scope.$parent.clearFabs();
      $scope.$parent.setHeaderFab('left');

      // Delay expansion
      $timeout(function() {
          $scope.isExpanded = true;
          $scope.$parent.setExpanded(true);
      }, 300);

      // Set Motion
      ionicMaterialMotion.fadeSlideInRight(); 
    }


    $scope.changePassword = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
          $scope.message = '';
        });
      }
		};
  });
 