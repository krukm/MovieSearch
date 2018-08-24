"use strict";

angular.module("app")
    .config(["$routeProvider", "$sceDelegateProvider", function($routeProvider, $sceDelegateProvider) {
        $routeProvider
        .when("/movieList", {
            template: `
            <movie-list></movie-list>
            `
        })
        .when("/watchList", {
            template: `
            <watch-list></watch-list>
            `
        })
        .when("/movieDetails", {
            template:`
            <movie-details></movie-details>
            `
        })
        .otherwise({
            redirectTo: "/movieList"
        });

        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://www.youtube.com/**'
          ]);
    }]);