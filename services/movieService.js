"use strict";
function MovieService($http) {
    const vm = this;
    vm.results = null;
    vm.genreResults = [];
    vm.searchMovies = function (searchInput, selected) {
        return $http({
            url: `https://api.themoviedb.org/3/search/movie?api_key=aef5248d110c426d0fbb272768a4ff38&query=${searchInput}`,
            method: "GET"
        }).then((response) => {
            console.log(`You selected ${selected}`);
            return response.data;
        });
    }
    vm.popularMovies = function () {
        return $http({
            url: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=aef5248d110c426d0fbb272768a4ff38`,
            method: "GET"
        }).then((response) => {
            return response.data;
        });
    }
    vm.searchByGenre = function (searchInput, genre) {
        return $http ({
            url: `https://api.themoviedb.org/3/search/movie?api_key=aef5248d110c426d0fbb272768a4ff38&query=${searchInput}`,
            method: "GET"
        }).then((response) => {
                for (let i = 0; i < response.length; i++) {
                    for (let j = 0; j < response.genre_ids; j++) {
                        if (response.genre_ids[j] === genre) {
                            vm.genreResults.push(response.genre_ids[j]);
                        }
                    }
                }
            return vm.genreResults;
        });
    }
}

angular
    .module("app")
    .service("MovieService", MovieService);
