/*
* AngularJS Monoku Test
*
*/

var configUrl = {
  baseUrl : window.location.origin ? window.location.origin : window.location.protocol + '//' + window.location.hostname + ':' + window.location.port,
  apiUrl: 'http://ws.audioscrobbler.com/2.0/',
  apiKey: 'API KEY HERE'
};

(function() {
  'use strict'
  
  angular
    .module('app', ['app.core'])
    .config(config)
    .run(run);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    run.$inject = ['$rootScope', '$state'];

    function config($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('home', {
          url: "/",
          templateUrl: 'views/home.html',
          controller: 'searchController'
        })
        .state('artist', {
          url: "/artist/:id",
          templateUrl: 'views/artist.html',
          controller: 'artistController'
        })
    }

    function run($rootScope, $state) {
      $rootScope.$on('$stateChangeStart', function(e, to) {
        // console.log('stateChangeStart', e, to);
      });
    }

})();
