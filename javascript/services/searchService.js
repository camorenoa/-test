/**
* Created by César Moreno
*/

(function(){
  'use strict';

  angular
    .module('app.core')
    .factory('searchService', searchService);

  searchService.$inject = ['$http'];


  function searchService($http) {
    
    var service = {
    	doSearch: doSearch
    }
    
    return service;
    
    /*
     * Get artist search data from api
     */
    function doSearch (query) {
      return $http({
        method: 'GET',
        url: configUrl.apiUrl,
        params: {
          method: 'artist.search',
          api_key: configUrl.apiKey,
          format: 'json',
          limit: 15,
          artist: query
        }
      });
    }
  }
})();