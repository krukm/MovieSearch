"use strict";
function MovieDetailsService() {
    const vm = this;
    vm.currentMovie = null;

    vm.getCurrentMovie =() => {
        console.log("getting movie")
        return vm.currentMovie;
    }
    
    vm.setCurrentMovie =(movie) => {
        vm.currentMovie = movie;
        console.log("setting movie");
    }
    vm.addToWatchList = (movie) => {
      WatchListService.addToWatchList(movie);
    }
}

angular
    .module("app")
    .service("MovieDetailsService", MovieDetailsService);