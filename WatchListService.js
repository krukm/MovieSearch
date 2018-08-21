'use strict';

function WatchListService() {

    const vm = this;

    vm.movieList = [];

    vm.setMovieList = (movie) => {
        vm.movieList.push(movie);
    }

    vm.getMovieList = () => {
        return vm.movieList;
    }
}

angular.module('app').service('WatchListService', WatchListService);