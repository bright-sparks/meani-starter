'use strict';

angular.module('starter')
.controller('LoginCtrl', function($scope,$rootScope, $timeout, $stateParams,  Auth, $location, $window ) {

   if (Auth.isLoggedIn() === true) {
     $scope.hybridRedirect("dash");
   }
 
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
          $scope.hybridRedirect("dash"); 
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
 
