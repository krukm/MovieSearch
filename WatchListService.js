'use strict';

function WatchListService() {

    const vm = this;

    vm.movieList = [
        'Fast Times at Ridgemont high',
        'Rambo',
        'Bambi'
    ];

    vm.setMovieList = (movie) => {
        vm.movieList.push(movie);
    }

    vm.getMovieList = () => {
        return vm.movieList;
    }
}

angular.module('app').service('WatchListService', WatchListService);