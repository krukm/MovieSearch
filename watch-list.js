"use strict";

const watchList = {
    template: `
        <h1>Your Watch List</h1>
        <p ng-repeat="movie in $ctrl.movieList"></p>

    `,
    controller: ["WatchListService", function(WatchListService){
        const vm = this;
        vm.movieList = WatchListService.getMoveList();
    }]
}

angular
    .module("app")
    .component("watchList", watchList);