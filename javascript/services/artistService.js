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

    var artistName = $stateParams.id;
    artistName = artistName.replace(/\+/gi, " ");

    var service = {
    	artistData: artistData
    }
    
    return service;

    function artistData () {
    	return $http({
    		method: 'GET',
    		url: configUrl.apiUrl,
        params: {
          method: 'artist.getInfo',
          api_key: configUrl.apiKey,
          // mbid: artistId,
          artist: artistName,
          autocorrect: [0|1],
          format: 'json'
        }
    	});
    }
  }
})();