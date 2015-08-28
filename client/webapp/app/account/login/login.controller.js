'use strict';

angular.module('starter')
.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk, Auth, $location, $window ) {
 
    $scope.$parent.clearFabs();
    $timeout(function() {
    $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
 
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    }; 
    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
})
 
