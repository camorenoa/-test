/**
* Created by César Moreno
*/

(function(){
  'use strict';

  angular
    .module('app.core')
    .factory('artistService', artistService);

  artistService.$inject = ['$http', '$stateParams'];


  function artistService($http, $stateParams) {

    var service = {
    	artistData: artistData
    }
    
    return service;

    /*
     * Get artist data from api
     */
    function artistData (artistName) {
    	return $http({
    		method: 'GET',
    		url: configUrl.apiUrl,
        params: {
          method: 'artist.getInfo',
          api_key: configUrl.apiKey,
          artist: artistName,
          format: 'json'
        }
    	});
    }
  }
})();