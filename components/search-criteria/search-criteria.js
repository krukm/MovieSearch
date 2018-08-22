"use strict";

const searchCriteria = {
    templateUrl: "components/search-criteria/search-criteria.html",
    controller: ['SearchService', 'MovieService', 'WatchListService', function(SearchService, MovieService, WatchListService) {
        const vm = this;
        vm.result = null;
    
        vm.getSearchResults = (searchTerm) => {
            MovieService.searchMovies(searchTerm).then((response) => {
                vm.result = response;
                SearchService.setSearchTerm(searchTerm);
                console.log(vm.result);
            });
            vm.addToWatchlist = (movie) => {
                WatchListService.addToWatchlist(movie);
               
            }  
        }
    }]
} 

angular
    .module("app")
    .component("searchCriteria", searchCriteria);