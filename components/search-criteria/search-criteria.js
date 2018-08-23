"use strict";

const searchCriteria = {
    templateUrl: "components/search-criteria/search-criteria.html",
    controller: ['SearchService', 'MovieService', 'WatchListService', function(SearchService, MovieService, WatchListService) {
        const vm = this;
        vm.result = null;
        vm.searchTerm = SearchService.getSearchTerm();
    
        vm.getSearchResults = (searchTerm) => {
            MovieService.searchMovies(searchTerm).then((response) => {
                vm.result = response;
                SearchService.setSearchTerm(searchTerm);
            });    
        }

        vm.addToWatchlist = (movie) => {
            WatchListService.addToWatchlist(movie);
        } 

        vm.getMovieByGenre = (searchTerm, genre) => {
           MovieService.searchByGenre(searchTerm, genre).then((response) => {
            SearchService.setSearchTerm(searchTerm);
            vm.result = response;
           });
        }

        if (vm.searchTerm !== null) {
            vm.getMovieByGenre(vm.searchTerm);
        }
    }]
} 

angular
    .module("app")
    .component("searchCriteria", searchCriteria);