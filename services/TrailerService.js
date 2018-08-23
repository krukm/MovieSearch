"use strict";
function TrailerService($http) {
    const vm = this;
    vm.trailerKey = null;
    vm.setTrailer = (movieId) => {
        return $http({
            url: `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=aef5248d110c426d0fbb272768a4ff38&language=en-US`,
            method: "GET"
    }).then((response) => {
        vm.trailerKey = response.data.results[0].key;
        console.log(vm.trailerKey);
       return vm.trailerKey;
    })
    }

    vm.getTrailerKey = () => {
        console.log(vm.trailerKey + " get response");
        return vm.trailerKey;

    }
}

angular 
    .module("app")
    .service("TrailerService", TrailerService);