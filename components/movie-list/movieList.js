"use strict";
const movieList = {
    templateUrl:"components/movie-list/movie-list.html",
        
        controller: ["MovieService", "WatchListService", "MovieDetailsService", function(MovieService, WatchListService, MovieDetailsService) {
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

             vm.setCurrentMovie = (movie) => {
                MovieDetailsService.setCurrentMovie(movie);
                console.log(movie);
        }
    }]
}



angular
    .module("app")
    .component("movieList", movieList);




