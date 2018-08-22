'use strict';

function WatchListService() {

    const vm = this;

    vm.movieList = [];

    vm.addToWatchlist = (movie) => {
        vm.movieList.unshift(movie);
        console.log(vm.movieList);
    }

    vm.deleteMovie = (index) => {
        vm.movieList.splice(index,1);
        console.log("delete " + index);
    }

    vm.getWatchlist = () => {
        return vm.movieList;
    }
}

angular.module('app').service('WatchListService', WatchListService);