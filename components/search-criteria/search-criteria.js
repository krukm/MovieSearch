"use strict";

const searchCriteria = {
    templateUrl: "components/search-criteria/search-criteria.html",
    controller: ['SearchService', 'MovieService', 'WatchListService', function(SearchService, MovieService, WatchListService) {
        const vm = this;
        vm.result = null;
    
        vm.getSearchResults = (searchTerm, selected) => {
            MovieService.searchMovies(searchTerm, selected).then((response) => {
                vm.result = response;
                //SearchService.setSearchTerm(searchTerm);
            });
        }

        vm.addToWatchlist = (movie) => {
            WatchListService.addToWatchlist(movie);   
        } 

        vm.getMovieByGenre = function (searchTerm, selected) {
            MovieService.searchByGenre(searchTerm, selected).then(function(response){
                vm.result = response;
                SearchService.setSearchTerm(searchTerm);
            })
        }

        vm.theSelect = function(selected) {
            MovieService.searchByGenre(selected).then(function(response){
                vm.result = response;
            })
        }
        
    }]
} 

angular
    .module("app")
    .component("searchCriteria", searchCriteria);