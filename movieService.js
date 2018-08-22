"use strict";
function MovieService($http) {
    const vm = this;
    vm.results = null;
    vm.searchMovies = function (searchInput) {
        return $http({
            url: `https://api.themoviedb.org/3/search/movie?api_key=aef5248d110c426d0fbb272768a4ff38&query=${searchInput}`,
<<<<<<< HEAD
=======
            method: "GET"
        }).then((response) => {
            return response.data;
        });
    }
    vm.popularMovies = function () {
        return $http({
            url: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=aef5248d110c426d0fbb272768a4ff38`,
>>>>>>> 2e686bdbd1fac7d3b7cc97b90da13342dafac103
            method: "GET"
        }).then((response) => {
            return response.data;
        });
    }
}

angular
    .module("app")
    .service("MovieService", MovieService);
