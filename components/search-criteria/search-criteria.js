"use strict";

const searchCriteria = {
    template: `
        <section>
            <input type="search" ng-model="$ctrl.searchTerm" placeholder="movie name">
            <button type="button" ng-click="$ctrl.searchMovieByTitle($ctrl.searchTerm);">Search</button>
            <section>
                <p ng-repeat="movie in $ctrl."> {{  }} </p>
            </section>
        </section>
    `,
    controller: ['SearchService', 'MovieService', function(SearchService, MovieService) {
        const vm = this;
        vm.searchTerm = SearchService.getSearchTerm();
        
        vm.searchMovieByTitle = (searchTerm) => {
            SearchService.setSearchTerm(searchTerm);
        }

    }]
} 

angular
    .module("app")
    .component("searchCriteria", searchCriteria);