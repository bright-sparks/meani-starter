'use strict';

angular.module('starter')
  .controller('SignupCtrl', function ($scope, Auth, $location, $window,$timeout ) {
 
    var url = window.location.href; 
    if (url.indexOf('ionic') !==-1) {
      $scope.$parent.clearFabs();
      $timeout(function() {
        $scope.$parent.hideHeader();
      }, 0); 
    }

    $scope.user = {};
    $scope.errors = {};

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/dash');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
