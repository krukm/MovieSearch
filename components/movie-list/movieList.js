"use strict";
const movieList = {
    templateUrl:"components/movie-list/movie-list.html",
        
        controller: ["MovieService", function(MovieService) {
            const vm = this;
        
            vm.displayOnPageOpen = () => {
                vm.displayMovies();
            }

            vm.displayMovies = () => {
                MovieService.popularMovies().then((response) => {
                vm.popMovies = response.results;
                });
            };
        vm.displayOnPageOpen();
    }]
}

angular
    .module("app")
    .component("movieList", movieList);