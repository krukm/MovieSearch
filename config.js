"use strict";

angular.module("app")
    .config(["$routeProvider"], function($routeProvider) {
        $routeProvider
        .when("/movieList", {
            template: `
            <movie-list></movie-list>
            `
        })
        .when("/watchList",{
            template: `
            <watch-list></watch-list>
            `
        })
        .otherwise({
            redirectTo: "/movieList"
        })

    })