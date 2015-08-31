'use strict';

angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('services', {
        url: '/services',
        templateUrl: 'app/services/services.html',
        controller: 'ServicesCtrl',
        authenticate: true
      });
  })
 