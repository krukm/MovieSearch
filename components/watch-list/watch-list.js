"use strict";

const watchList = {
    templateUrl: "components/watch-list/watch-list.html",
    controller: ["WatchListService", function(WatchListService){
        const vm = this;
        vm.deleteMovie = (index) => {
            WatchListService.deleteMovie(index);
        }

        vm.movieList = WatchListService.getWatchlist();
        console.log(vm.movieList);
        
    }]
}

angular
    .module("app")
    .component("watchList", watchList);