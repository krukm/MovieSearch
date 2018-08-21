'use strict';

function WatchListService() {

    const vm = this;

    vm.movieList = [
        {name: 'Fast Times at Ridgemont high'},
         {name: 'Rambo'},
        {name: 'Bambi'}
    ];

    vm.setMovieList = (movie) => {
        vm.movieList.push(movie);
    }

    vm.getMovieList = () => {
        console.log("You're in the getMovie Service");
        return vm.movieList;
    }
}

angular.module('app').service('WatchListService', WatchListService);