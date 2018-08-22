"use strict";

const watchList = {
    template: `
        <h1>Your Watch List</h1>
        <section ng-repeat="movie in $ctrl.movieList track by $index">
            <p> {{ movie.name }} </p>
        </section>
    `,
    controller: ["WatchListService", function(WatchListService){
        const vm = this;

        vm.movieList = WatchListService.getMovieList();
        console.log(vm.movieList);
    }]
}

angular
    .module("app")
    .component("watchList", watchList);