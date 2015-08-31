// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material','ionMdInput','ngCookies','ngResource', 'ui.router'])

.run(function($ionicPlatform,$rootScope, $location, Auth) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}

    $rootScope.isMobileApp = function() {
      var isCordovaApp = document.URL.indexOf('http://') === -1
      && document.URL.indexOf('https://') === -1;
      var isMobileView = $location.path().indexOf('ionic') === -1
       if (isCordovaApp && isMobileView)  {
          return true;
       } else {
          return false;
       }
    };
    $rootScope.hybridRedirect = function(path) {
       var url = $location.$$url
       url = url.replace(/\/[^\/]*$/, ('/' + path))
       $location.url(url); 
    }; 
	});

  $rootScope.$on('$stateChangeStart', function (event, next) {
    Auth.isLoggedInAsync(function(loggedIn) {
      if (next.authenticate && !loggedIn) {
        $location.path('/login');
      }
    });
  }); 

})

.factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
  return {
    // Add authorization token to headers
    request: function (config) {
      config.headers = config.headers || {};
      if ($cookieStore.get('token')) {
        config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
      }
      return config;
    },

    // Intercept 401s and redirect you to login
    responseError: function(response) {
      if(response.status === 401) {
        $location.path('/login');
        // remove any stale tokens
        $cookieStore.remove('token');
        return $q.reject(response);
      }
      else {
        return $q.reject(response);
      }
    }
  };
}) 
 

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $locationProvider, $httpProvider) {
	$ionicConfigProvider.views.maxCache(0);
 
  $httpProvider.interceptors.push('authInterceptor');

	$stateProvider.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller: 'AppCtrl'
	})
 

	.state('app.settings', {
		url: '/settings',
		authenticate: true,
		views: {
			'menuContent': {
				templateUrl: 'templates/settings.html',
				controller: 'SettingsCtrl' 
			},
			'fabContent': {
				template: ''
			}
		}
	})

	.state('app.gallery', {
		url: '/gallery',
		views: {
			'menuContent': {
				templateUrl: 'templates/gallery.html',
				controller: 'GalleryCtrl'
			},
			'fabContent': {
				template: '' 
				}
			} 
		})

	.state('app.login', {
		url: '/login',
		views: {
			'menuContent': {
				templateUrl: 'templates/login.html',
				controller: 'LoginCtrl'
			},
			'fabContent': {
				template: ''
			}
		}
	})
	.state('app.signup', {
		url: '/signup',
		views: {
			'menuContent': {
				templateUrl: 'templates/signup.html',
				controller: 'SignupCtrl'
			},
			'fabContent': {
				template: ''
			}
		}
	})


	.state('app.dash', {
		url: '/dash',
		authenticate: true,
		views: {
			'menuContent': {
				templateUrl: 'templates/dash.html',
				controller: 'DashCtrl' 
			},
			'fabContent': {
				template: ''
			}
		}
	})

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/login');
});
