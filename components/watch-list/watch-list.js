"use strict";

const watchList = {
    templateUrl: "components/watch-list/watch-list.html",
    controller: ["WatchListService", "MovieDetailsService", function(WatchListService, MovieDetailsService){
        const vm = this;
        vm.deleteMovie = (index) => {
            WatchListService.deleteMovie(index);
        }

        vm.movieList = WatchListService.getWatchlist();
        console.log(vm.movieList);

        vm.setCurrentMovie = (movie) => {
            MovieDetailsService.setCurrentMovie(movie);
            console.log(movie);
        }
        
    }]
}

angular
    .module("app")
    .component("watchList", watchList);