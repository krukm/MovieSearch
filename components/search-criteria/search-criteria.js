"use strict";

const searchCriteria = {
    template: `
        <section>
            <input type="search" ng-model="$ctrl.searchTerm" placeholder="movie name">
            <button type="button" ng-click="$ctrl.searchMovieByTitle($ctrl.searchTerm);">Search</button>
        </section>
    `,
    controller: ['SearchService', function(SearchService) {
        const vm = this;
        vm.searchTerm = SearchService.getSearchTerm();
        
        vm.searchMovieByTitle = (searchTerm) => {
            SearchService.setSearchTerm(searchTerm);
        }

        vm.displayOnPageOpen = () => {
            MovieService.searchMovies(vm.searchTerm).then((response) => {
                vm.searchMovies = response.results;
                });
        }
    }]
} 

angular
    .module("app")
    .component("searchCriteria", searchCriteria);