
'use strict';

angular.module('starter')
 .factory('CalendarService', function($q) {
      var date = new Date();
      var d = date.getDate();
      var m = date.getMonth();
      var y = date.getFullYear();

      var eventos =[
        {id: 123,title: 'All Day Event',start: new Date(y, m, 1),url: '#/app/booking'},
        {id: 124,title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2),url: '#/app/booking'},
        {id: 125,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false,url: '#/app/booking'},
        {id: 126,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false,url: '#/app/booking'},
        {id: 127,title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false,url: '#/app/booking'},
        {id: 128,title: 'Test event',start: new Date(y, m, 28),end: new Date(y, m, 29),url: '#/app/booking'}
      ];

      return{
        all: function() {
          var deferredEventos = $q.defer();
          deferredEventos.resolve(eventos);
          return deferredEventos.promise;
        },
    };
  });