"use strict";
function MovieService($http) {
    const vm = this;
    vm.results = null;
    vm.genreResults = [];
    vm.searchMovies = function (searchInput) {
        return $http({
            url: `https://api.themoviedb.org/3/search/movie?api_key=aef5248d110c426d0fbb272768a4ff38&query=${searchInput}`,
            method: "GET"
        }).then((response) => {
            vm.results = response.data;
            return response.data;
        });
    }

    vm.searchByGenre = function (searchInput, genre) {
        return $http ({
            url: `https://api.themoviedb.org/3/search/movie?api_key=aef5248d110c426d0fbb272768a4ff38&query=${searchInput}`,
            method: "GET"
        }).then((response) => {
                for (let i = 0; i < response.data.results.length; i++) {
                    for(let j = 0; j < response.data.results[i].genre_ids.length; j++){
                        if (response.data.results[i].genre_ids[j].toString() === genre) {
                            vm.genreResults.push(response.data.results[i]);
                        }
                    }
                }
                console.log(vm.genreResults);
            return vm.genreResults;
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
}

angular
    .module("app")
    .service("MovieService", MovieService);
