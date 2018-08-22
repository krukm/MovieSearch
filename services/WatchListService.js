'use strict';

function WatchListService() {

    const vm = this;

    vm.movieList = [];

    vm.addToWatchlist = (movie) => {
        vm.movieList.unshift(movie);
        console.log(vm.movieList);
    }

    vm.getWatchlist = () => {
        return vm.movieList;
    }
}

angular.module('app').service('WatchListService', WatchListService);