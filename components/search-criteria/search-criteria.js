"use strict";

const searchCriteria = {
    templateUrl: "components/search-criteria/search-criteria.html",
    controller: ['SearchService', 'MovieService', 'WatchListService', function(SearchService, MovieService, WatchListService) {
        const vm = this;
        vm.result = null;
        vm.genreList = null;
        vm.selectedGenre = null;
    
        vm.getSearchResults = (searchTerm) => {
            MovieService.searchMovies(searchTerm).then((response) => {
                vm.result = response;
                SearchService.setSearchTerm(searchTerm);
            });
            vm.addToWatchlist = (movie) => {
                WatchListService.addToWatchlist(movie);
               
            }  
        }

        vm.getGenreList = () => {
            MovieService.genreList().then((response) => {
                vm.genreList = response.genres;
            });
        };
        vm.getGenreResults = (genreInput) => {
            MovieService.moviesByGenre(genreInput).then((response) => {
                console.log(genreInput);
                vm.result = response;
                console.log(response)
                console.log(vm.result)
                SearchService.setSearchTerm(genreInput);
            });
        }
        

        vm.getGenreList();
    }]
} 

angular
    .module("app")
    .component("searchCriteria", searchCriteria);