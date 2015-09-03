'use strict';

angular.module('starter')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bookings', {
        url: '/bookings',
        templateUrl: 'app/bookings/bookings.html',
        controller: 'BookingsCtrl',
        authenticate: true
      })
      .state('booking', {
        url: '/booking',
        templateUrl: 'app/bookings/booking.html',
        authenticate: true
      });
  });
 