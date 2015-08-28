angular.module('ionicApp.controllers', [])

.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
})
.controller('HomeTabCtrl', function($scope) {
})


.controller('LoginCtrl', function ($scope, Auth, $location, $window) {
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

.controller('SettingsCtrl', function ($scope, User, Auth) {
  $scope.errors = {};

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
})

.controller('SignupCtrl', function ($scope, Auth, $location, $window) {
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
        $location.path('/');
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
})

.controller('ThingsCtrl', function($scope, Things) {
  Things.all(function(err, things) {
  	$scope.things = things
  });
})

.controller('ThingDetailCtrl', function($scope, $stateParams, Things) {
  Things.get($stateParams.thingId, function(err, thing) {
  	$scope.thing = thing
  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableSomething: true
  };
});
 