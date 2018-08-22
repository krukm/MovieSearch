"use strict";

angular.module("app")
    .config(["$routeProvider", function($routeProvider) {
        $routeProvider
        .when("/movieList", {
            template: `
            <movie-list>
                <h1>Movie List</h1>
            </movie-list>
            `
        })
        .when("/watchList",{
            template: `
            <watch-list>
                <h1>Watch List</h1>
            </watch-list>
            `
        })
        .otherwise({
            redirectTo: "/movieList"
        })

    }])