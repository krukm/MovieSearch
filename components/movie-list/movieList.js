"use strict";
const movieList = {
    templateUrl: "components/movie-list/movie-list.html",
        
        controller: ["MovieService", "WatchListService", function(MovieService, WatchListService) {
            const vm = this;
        
            vm.displayOnPageOpen = () => {
                vm.displayMovies();
            }

            vm.displayMovies = () => {
                MovieService.popularMovies().then((response) => {
                vm.popMovies = response.results;
                });
            };
            vm.addToWatchlist = (movie) => {
                WatchListService.addToWatchlist(movie);
            }
        vm.displayOnPageOpen();
    }]
}

angular
    .module("app")
    .component("movieList", movieList);