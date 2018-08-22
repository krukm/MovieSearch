"use strict";

const searchCriteria = {
    templateUrl: "components/search-criteria/search-criteria.html",
    controller: ['SearchService', 'MovieService', function(SearchService, MovieService) {
        const vm = this;
        vm.result = null;
    
        vm.getSearchResults = (searchTerm) => {
            MovieService.searchMovies(searchTerm).then((response) => {
                vm.result = response;
            console.log(vm.result.results);
            });
            
        }

    }]
} 

angular
    .module("app")
    .component("searchCriteria", searchCriteria);