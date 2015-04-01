/**
* Created by César Moreno
*/

(function(){
  'use strict';

  angular
    .module('app')
    .controller('artistController', artistController);

  artistController.$inject = ['$scope', '$state', '$stateParams', 'artistService'];

  function artistController($scope, $state, $stateParams, artistService) {


    artistService.artistData()
      .success(function (response) {
        $scope.artistData = response.artist;
        var image = $scope.artistData.image;
        $scope.imageSrc = image[image.length - 1]['#text'];
      })
      .error(function(error){
        console.error(error);
      });

    $scope.artistLink = function(nameArtist) {
      var nameUrl = nameArtist.replace(/\ /gi, "+");
      if($stateParams.id != nameUrl) {
        window.location.href = $state.href($state.current.name, {id: nameUrl});
        window.location.reload();
      }
    }
  }

})();