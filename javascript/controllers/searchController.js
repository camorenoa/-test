/**
* Created by César Moreno
*/

(function(){
  'use strict';

  angular
    .module('app')
    .controller('searchController', searchController);

  searchController.$inject = ['searchService', '$scope', '$state'];

  function searchController(searchService, $scope, $state) {
    $scope.results = {};
    $scope.TEXT_REGEXP = /^[a-zA-Z0-9'\s'Ññ]*$/i;

    /*
     * Watch query changes in search bar
     */
    $scope.$watch('query', function(newValue, oldValue){
      if(newValue != oldValue){
        searchService.doSearch(newValue)
          .then(function (response) {
            if($scope.query && $scope.TEXT_REGEXP.test($scope.query)) {
              $scope.results = response.data.results.artistmatches.artist;
            } else if(!$scope.query) {
              $scope.results = {};
            }
        }, function (error) {
            console.error(error);          
        });
      }
    });

    /*
     * Artist redirect
     */
    $scope.artistLink = function(nameArtist) {
      var nameUrl = nameArtist.replace(/\s/gi, "+");
      $state.go('artist', {id: nameUrl});
    }

  }

})();