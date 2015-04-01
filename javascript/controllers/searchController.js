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
    $scope.TEXT_REGEXP = "/^[a-zA-Z0-9' 'Ññ]*$/";

    $scope.$watch('query', function(newValue, oldValue){
      if(newValue != oldValue){
        searchService.doSearch(newValue)
          .then(function (response) {
            if($scope.query && $scope.query != $scope.TEXT_REGEXP) {
              $scope.results = response.data.results.artistmatches.artist;
              // console.log('response', $scope.results );
            } else if(!$scope.query) {
              $scope.results = {};
            }
        }, function (error) {
            console.error(error);          
        });
      }
    });

    $scope.artistLink = function(nameArtist) {
      var nameUrl = nameArtist.replace(/\ /gi, "+");
      $state.go('artist', {id: nameUrl});
    }

  }

})();