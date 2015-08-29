'use strict';

angular.module('starter')
.controller('LoginCtrl', function($scope, $timeout, $stateParams,  Auth, $location, $window ) {
 
    var url = window.location.href; 
    if (url.indexOf('ionic') !==-1) {
      $scope.$parent.clearFabs();
      $timeout(function() {
        $scope.$parent.hideHeader();
      }, 0); 
    }
 
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
           var url = $location.$$url
           url = url.replace(/\/[^\/]*$/, '/dash')
           $location.url(url); 

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
 
