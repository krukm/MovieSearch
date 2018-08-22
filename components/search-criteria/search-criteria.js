"use strict";

const searchCriteria = {
    bindings: {
        
    },
    template: `
        <section>
            <input type="search" ng-model="$ctrl.searchTerm" placeholder="movie name">
            <button type="button" ng-click="$ctrl.searchMovieByTitle($ctrl.searchTerm);">Search</button>
        </section>
    `,
    controller: ['SearchService', function(SearchService) {
        const vm = this;
        
        vm.searchMovieByTitle = (searchTerm) => {
            SearchService.setSearchTerm(searchTerm);
        }
    }]
} 

angular
    .module("app")
    .component("searchCriteria", searchCriteria);